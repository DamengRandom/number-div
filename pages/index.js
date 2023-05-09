import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {
  convertToGua,
  convertToYao,
  allGuas,
  allYaos,
  answers,
} from "../utils/helpers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";

function request(data, setOutput, getAnswer) {
  // calculate the gua & yao
  const xiaGua = convertToGua(data["xia"] % 8);
  const shangGua = convertToGua(data["shang"] % 8);
  const theYao = convertToYao(data["yao"] % 6);

  // convert gua & yao to one of 64 varients
  const gua = allGuas(`${shangGua}-${xiaGua}`);
  const yao = allYaos(gua)?.[theYao - 1];

  // release final result answer
  // const finalResult = answer(`${gua}${yao}`); // single result
  const finalResult = answers(`${gua}${yao}`); // multiple results

  setOutput(finalResult); // (321 215 686 test for failure case)
  getAnswer(`请解释易经${gua}卦`); // GPT request for acquring answer
}

const NumberInput = ({ name, label, errors, register }) => (
  <FormControl isInvalid={errors[name]} pt={4}>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <Input
      id={name}
      {...register(name, {
        required: "This field is required",
        pattern: {
          value: /^\d{3}$/i,
          message: "请输入数字(3位数)",
        },
      })}
      placeholder="请输入数字(3位数)"
    />
    <FormErrorMessage>{errors[name] && errors[name]?.message}</FormErrorMessage>
  </FormControl>
);

const queryClient = new QueryClient();

function HomeComponent() {
  const [output, setOutput] = useState({});
  const [loading, setLoading] = useState(false);

  const queryMutation = useMutation({
    mutationFn: async (text) => {
      if (text) {
        const response = await fetch(`/api/gpt?words=${text}`); // query eg: "generate a javascript closure code example"

        if (!response.ok) throw new Error("not ok ..");

        const json = await response.json();

        return json?.data?.choices[0]?.text;
      } else {
        return "No request detected yet ..";
      }
    },
    onSuccess: () => {
      // refetch the latest data
      queryClient.invalidateQueries({ queryKey: ["answer"] });
    },
  });

  const getAnswer = (value) => {
    queryMutation.mutate(value, {
      onSuccess: (data) => data,
    });
  };

  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
  } = useForm();
  // Concept: enter 3 3-digits numbers, make calculation, get result

  return (
    <>
      <Head>
        <title>Number Divination</title>
        <meta
          name="description"
          content="Number Divination created by Damengrandom"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Navbar />
        <Container maxW="4xl">
          <form
            onSubmit={handleSubmit((data) => {
              try {
                setLoading(true);
                setTimeout(() => {
                  request(data, setOutput, getAnswer);
                  setLoading(false);
                }, 1000); // get result after 1 second ~~
              } catch (error) {
                console.error("Error during submit: ", error);
                setLoading(false);
              }
            })}
          >
            <NumberInput
              name="xia"
              label="第一个心中所想数字 (下卦) [3位数]"
              errors={errors}
              register={register}
            />
            <NumberInput
              name="shang"
              label="第二个心中所想数字 (上卦) [3位数]"
              errors={errors}
              register={register}
            />
            <NumberInput
              name="yao"
              label="第三个心中所想数字 (爻辞) [3位数]"
              errors={errors}
              register={register}
            />
            <Button
              css={{
                "&:disabled": { background: "grey" },
              }}
              width="100%"
              type="submit"
              name="kan"
              mt={4}
              colorScheme="teal"
              isLoading={loading}
              isDisabled={!isDirty}
            >
              计算
            </Button>
          </form>
          <Divider />
          {loading ? (
            <Flex alignItems="center" justifyContent="center" height="300">
              <span className="loader" />
            </Flex>
          ) : (
            <Box pt={8}>
              {output.meaning === "无" ? (
                <Heading as="h3" size="md" color="red">
                  抱歉, 请重新填写数字 进行计算
                </Heading>
              ) : null}
              {Object.keys(output)?.length > 0 && (
                <Box>
                  <Heading as="h3" size="md" pt={8}>
                    结果:{" "}
                    <Text color="teal" pt="4">
                      {output.meaning}
                    </Text>
                  </Heading>
                  <Box py={4}>
                    <Text fontSize="lg">
                      <strong>卦名</strong>: {output.gua}
                    </Text>
                    <Text fontSize="lg">
                      <strong>爻位</strong>: {output.yao}
                    </Text>
                    <Text fontSize="lg">
                      <strong>卦辞</strong>: {output.guaCi}
                    </Text>
                    <Text fontSize="lg">
                      <strong>爻辞</strong>: {output.yaoCi}
                    </Text>
                  </Box>
                  <Divider />
                  {!!output?.videoUrls?.length && (
                    <>
                      <Heading as="h3" size="sm" py={4}>
                        视频
                      </Heading>
                      <Flex
                        flexDirection="row"
                        overflowY="scroll"
                        css={{
                          "&::-webkit-scrollbar": { width: "4px" },
                          "&::-webkit-scrollbar-track": { width: "6px" },
                          "&::-webkit-scrollbar-thumb": {
                            background: "teal",
                          },
                        }}
                      >
                        {output?.videoUrls.map((url, index) => (
                          <iframe
                            key={`video-url-${index + 1}`}
                            width="255.6"
                            height="144"
                            src={url}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        ))}
                      </Flex>
                    </>
                  )}
                  <Divider />
                  {!!output?.references?.length && (
                    <>
                      <Heading as="h3" size="sm" pt={8} pb={4}>
                        相关文章
                      </Heading>
                      <OrderedList>
                        {output?.references?.map((references, index) => (
                          <ListItem key={`reference-link-${index + 1}`}>
                            <Link
                              href={references}
                              target="_blank"
                              rel="noreferrer"
                            >
                              文章 {index + 1}
                            </Link>
                          </ListItem>
                        ))}
                      </OrderedList>
                    </>
                  )}
                  <Divider />
                  <>
                    {queryMutation?.isLoading && <p>Content generating ..</p>}
                    {queryMutation?.isError && (
                      <p>Error occurred during generating new content ..</p>
                    )}
                    {!!queryMutation?.data && (
                      <>
                        <Heading as="h3" size="sm" pt={8} pb={4}>
                          AI智能回答
                        </Heading>
                        <Box>{queryMutation?.data}</Box>
                      </>
                    )}
                  </>
                </Box>
              )}
            </Box>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeComponent />
    </QueryClientProvider>
  );
}
