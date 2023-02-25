import Head from "next/head";
import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  IconButton,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import {
  convertToGua,
  convertToYao,
  allGuas,
  allYaos,
  answers,
} from "../utils/helpers";

function request(data, setOutput) {
  // calculate the gua & yao
  const xiaGua = convertToGua(data["xia"] % 8);
  const shangGua = convertToGua(data["shang"] % 8);
  const yaoCi = convertToYao(data["yao"] % 6);

  // convert gua & yao to one of 64 varients
  const gua = allGuas(`${shangGua}-${xiaGua}`);
  const yao = allYaos(gua)[yaoCi];

  // release final result answer
  // const finalResult = answer(`${gua}${yao}`); // single result
  const finalResult = answers(`${gua}${yao}`); // multiple results

  setOutput(finalResult);
}

export default function Home() {
  const [output, setOutput] = useState({});
  const {
    register,
    formState: { errors, isSubmitting },
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
        <Flex px={8} py={4}>
          <Box>
            <Heading as="h3" size="md">
              周易数字卦
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Box>
        </Flex>
        <Container maxW="4xl">
          <form
            onSubmit={handleSubmit((data) => {
              try {
                request(data, setOutput);
              } catch (error) {
                console.error(error);
              }
            })}
          >
            <FormControl isInvalid={errors.xia}>
              <FormLabel htmlFor="xia">
                First number - <b>3</b> digits
              </FormLabel>
              <Input
                id="xia"
                {...register("xia", {
                  required: "This field is required",
                  pattern: {
                    value: /^\d{3}$/i,
                    message: "Please enter a 3 digits postive number",
                  },
                })}
                placeholder="Please enter first number (3 digits only)"
              />
              <FormErrorMessage>
                {errors?.xia && errors?.xia?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.shang}>
              <FormLabel htmlFor="shang">
                Second number - <b>3</b> digits
              </FormLabel>
              <Input
                id="shang"
                {...register("shang", {
                  required: "This field is required",
                  pattern: {
                    value: /^\d{3}$/i,
                    message: "Please enter a 3 digits postive number",
                  },
                })}
                placeholder="Please enter second number (3 digits only)"
              />
              <FormErrorMessage>
                {errors?.shang && errors?.shang?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.yao}>
              <FormLabel htmlFor="yao">
                Third number - <b>3</b> digits
              </FormLabel>
              <Input
                id="yao"
                {...register("yao", {
                  required: "This field is required",
                  pattern: {
                    value: /^\d{3}$/i,
                    message: "Please enter a 3 digits postive number",
                  },
                })}
                placeholder="Please enter third number (3 digits only)"
              />
              <FormErrorMessage>
                {errors?.yao && errors?.yao?.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              name="kan"
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </form>
          {Object.keys(output)?.length > 0 && (
            <div>
              <h3>答案是: {output.meaning}</h3>
              <div>
                <p>卦: {output.gua}</p>
                <p>爻: {output.yao}</p>
                <p>大象辞: {output.daXiang}</p>
                <p>小象辞: {output.xiaoXiang}</p>
              </div>
              <br />
              {!!output?.videoUrls?.length && (
                <>
                  <h4>视频</h4>
                  {output?.videoUrls.map((url, index) => (
                    <iframe
                      key={`video-url-${index + 1}`}
                      width="319.5"
                      height="180"
                      src={url}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ))}
                </>
              )}
              <br />
              <br />
              {!!output?.references?.length && (
                <>
                  <h4>相关文章</h4>
                  <ul>
                    {output?.references?.map((references, index) => (
                      <li key={`reference-link-${index + 1}`}>
                        <a href={references} target="_blank" rel="noreferrer">
                          Reference {index + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </Container>
      </main>
      <footer>
        <Box p={8}>
          <Heading as="h2" size="sm">
            Developed by Damengrandom
          </Heading>
        </Box>
      </footer>
    </>
  );
}
