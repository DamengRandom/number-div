import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  convertToGua,
  convertToYao,
  allGuas,
  allYaos,
  // answer,
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
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
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
      </main>

      <footer>Developed by Damengrandom</footer>
    </>
  );
}
