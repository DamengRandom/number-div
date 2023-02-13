import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  convertToGua,
  convertToYao,
  allGuas,
  allYaos,
  answer,
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
  const finalResult = answer(`${gua}${yao}`);

  setOutput(finalResult);
}

export default function Home() {
  const [output, setOutput] = useState("");
  const { register, handleSubmit } = useForm();
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

      <main>
        <form
          onSubmit={handleSubmit((data) => {
            try {
              request(data, setOutput);
            } catch (error) {
              console.error(error);
            }
          })}
        >
          <input
            {...register("xia", { required: true })}
            placeholder="Please enter first number (3 digits only)"
          />
          <input
            {...register("shang", { required: true })}
            placeholder="Please enter second number (3 digits only)"
          />
          <input
            {...register("yao", { required: true })}
            placeholder="Please enter third number (3 digits only)"
          />

          <input type="submit" name="kan" />
        </form>
        {output && <p>The answer is: {output}</p>}
      </main>

      <footer>Developed by Damengrandom</footer>
    </>
  );
}
