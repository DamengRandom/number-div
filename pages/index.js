import Head from "next/head";
import { useForm } from "react-hook-form";

function convertToGua(number) {
  switch (number) {
    case 1:
      return "sky";
    case 2:
      return "swamp";
    case 3:
      return "fire";
    case 4:
      return "thunder";
    case 5:
      return "wind";
    case 6:
      return "water";
    case 7:
      return "mountain";
    default:
      return "land";
  }
}

function convertToYao(number) {
  switch (number) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
    default:
      return 6;
  }
}

function allGuas(guaCi) {
  switch (guaCi) {
    case "sky-sky":
      return "乾";
    case "land-land":
      return "坤";
    case "water-thunder":
      return "屯";
    case "mountain-water":
      return "蒙";
    case "water-sky":
      return "需";
    case "sky-water":
      return "讼";
    case "land-water":
      return "师";
    case "water-land":
      return "比";
    case "wind-sky":
      return "小畜";
    case "sky-swamp":
      return "履";
    case "land-sky":
      return "泰";
    case "sky-land":
      return "否";
    case "sky-fire":
      return "同人";
    case "fire-sky":
      return "大有";
    case "land-mountain":
      return "谦";
    case "thunder-land":
      return "豫";
    case "swamp-thunder":
      return "随";
    case "mountian-wind":
      return "蛊";
    case "land-swamp":
      return "临";
    case "wind-land":
      return "观";
    case "fire-thunder":
      return "噬嗑";
    case "mountian-fire":
      return "贲";
    case "mountian-land":
      return "剥";
    case "land-thunder":
      return "复";
    case "sky-thunder":
      return "无妄";
    case "mountian-sky":
      return "大畜";
    case "mountian-thunder":
      return "颐";
    case "swamp-wind":
      return "大过";
    case "water-water":
      return "坎";
    case "fire-fire":
      return "离";
    case "swamp-mountain":
      return "咸";
    case "thunder-wind":
      return "恒";
    case "sky-mountain":
      return "遁";
    case "thunder-sky":
      return "大壮";
    case "fire-land":
      return "晋";
    case "land-fire":
      return "明夷";
    case "wind-fire":
      return "家人";
    case "fire-swamp":
      return "睽";
    case "water-mountain":
      return "蹇";
    case "thunder-water":
      return "解";
    case "mountain-swamp":
      return "损";
    case "wind-thunder":
      return "益";
    case "swamp-sky":
      return "夬";
    case "sky-wind":
      return "姤";
    case "swamp-land":
      return "萃";
    case "land-wind":
      return "升";
    case "swamp-water":
      return "困";
    case "water-wind":
      return "井";
    case "swamp-fire":
      return "革";
    case "fire-wind":
      return "鼎";
    case "thunder-thunder":
      return "震";
    case "mountain-mountain":
      return "艮";
    case "wind-mountain":
      return "渐";
    case "thunder-swamp":
      return "归妹";
    case "thunder-fire":
      return "丰";
    case "fire-mountain":
      return "旅";
    case "wind-wind":
      return "巽";
    case "swamp-swamp":
      return "兑";
    case "wind-water":
      return "涣";
    case "water-swamp":
      return "节";
    case "wind-swamp":
      return "中孚";
    case "thunder-mountain":
      return "小过";
    case "water-fire":
      return "既济";
    case "fire-water":
      return "未济";
  }
}

function allYaos(gua) {
  switch (gua) {
    case "sky-sky":
    case "乾":
      return ["初九", "九二", "九三", "九四", "九五", "上九"];
    case "land-land":
    case "坤":
      return ["初六", "六二", "六三", "六四", "六五", "上六"];
    case "water-thunder":
    case "屯":
      return ["初九", "六二", "六三", "六四", "九五", "上六"];
    case "mountain-water":
    case "蒙":
      return ["初六", "九二", "六三", "六四", "六五", "上九"];
    case "water-sky":
    case "需":
      return ["初九", "九二", "九三", "六四", "九五", "上六"];
    case "sky-water":
    case "讼":
      return ["初六", "九二", "六三", "九四", "九五", "上九"];
    case "land-water":
    case "师":
      return ["初六", "九二", "六三", "六四", "六五", "上六"];
    case "water-land":
    case "比":
      return ["初六", "六二", "六三", "六四", "九五", "上六"];
    case "wind-sky":
    case "小畜":
      return ["初九", "九二", "九三", "六四", "九五", "上九"];
    case "sky-swamp":
    case "履":
      return ["初九", "九二", "六三", "九四", "九五", "上九"];
    case "land-sky":
    case "泰":
      return ["初九", "九二", "九三", "六四", "六五", "上六"];
    case "sky-land":
    case "否":
      return ["初六", "六二", "六三", "九四", "九五", "上九"];
    case "sky-fire":
    case "同人":
      return ["初九", "六二", "九三", "九四", "九五", "上九"];
    case "fire-sky":
    case "大有":
      return ["初九", "九二", "九三", "九四", "六五", "上九"];
    case "land-mountain":
    case "谦":
      return ["初六", "六二", "九三", "六四", "六五", "上六"];
    case "thunder-land":
    case "豫":
      return ["初六", "六二", "六三", "九四", "六五", "上六"];
    case "swamp-thunder":
    case "随":
      return ["初九", "六二", "六三", "九四", "九五", "上六"];
    case "mountian-wind":
    case "蛊":
      return ["初六", "九二", "九三", "六四", "六五", "上九"];
    case "land-swamp":
    case "临":
      return ["初九", "九二", "六三", "六四", "六五", "上六"];
    case "wind-land":
    case "观":
      return ["初六", "六二", "六三", "六四", "九五", "上九"];
    case "fire-thunder":
    case "噬嗑":
      return ["初九", "六二", "六三", "九四", "六五", "上九"];
    case "mountian-fire":
    case "贲":
      return ["初九", "六二", "九三", "六四", "六五", "上九"];
    case "mountian-land":
    case "剥":
      return ["初六", "六二", "六三", "六四", "六五", "上九"];
    case "land-thunder":
    case "复":
      return ["初九", "六二", "六三", "六四", "六五", "上六"];
    case "sky-thunder":
    case "无妄":
      return ["初九", "六二", "六三", "九四", "九五", "上九"];
    case "mountian-sky":
    case "大畜":
      return ["初九", "九二", "九三", "六四", "六五", "上九"];
    case "mountian-thunder":
    case "颐":
      return ["初九", "六二", "六三", "六四", "六五", "上九"];
    case "swamp-wind":
    case "大过":
      return ["初六", "九二", "九三", "九四", "九五", "上六"];
    case "water-water":
    case "坎":
      return ["初六", "九二", "六三", "六四", "九五", "上六"];
    case "fire-fire":
    case "离":
      return ["初九", "六二", "九三", "九四", "六五", "上九"];
    case "swamp-mountain":
    case "咸":
      return ["初六", "六二", "九三", "九四", "九五", "上六"];
    case "thunder-wind":
    case "恒":
      return ["初六", "九二", "九三", "九四", "六五", "上六"];
    case "sky-mountain":
    case "遁":
      return ["初六", "六二", "九三", "九四", "九五", "上九"];
    case "thunder-sky":
    case "大壮":
      return ["初九", "九二", "九三", "九四", "六五", "上六"];
    case "fire-land":
    case "晋":
      return ["初六", "六二", "六三", "九四", "六五", "上九"];
    case "land-fire":
    case "明夷":
      return ["初九", "六二", "九三", "六四", "六五", "上六"];
    case "wind-fire":
    case "家人":
      return ["初九", "六二", "九三", "六四", "九五", "上九"];
    case "fire-swamp":
    case "睽":
      return ["初九", "九二", "六三", "九四", "六五", "上九"];
    case "water-mountain":
    case "蹇":
      return ["初六", "六二", "九三", "六四", "九五", "上六"];
    case "thunder-water":
    case "解":
      return ["初六", "九二", "六三", "九四", "六五", "上六"];
    case "mountain-swamp":
    case "损":
      return ["初九", "九二", "六三", "六四", "六五", "上九"];
    case "wind-thunder":
    case "益":
      return ["初九", "六二", "六三", "六四", "九五", "上九"];
    case "swamp-sky":
    case "夬":
      return ["初九", "九二", "九三", "九四", "九五", "上六"];
    case "sky-wind":
    case "姤":
      return ["初六", "九二", "九三", "九四", "九五", "上九"];
    case "swamp-land":
    case "萃":
      return ["初六", "六二", "六三", "九四", "九五", "上六"];
    case "land-wind":
    case "升":
      return ["初六", "九二", "九三", "六四", "六五", "上六"];
    case "swamp-water":
    case "困":
      return ["初六", "九二", "六三", "九四", "九五", "上六"];
    case "water-wind":
    case "井":
      return ["初六", "九二", "九三", "六四", "九五", "上六"];
    case "swamp-fire":
    case "革":
      return ["初九", "六二", "九三", "九四", "九五", "上六"];
    case "fire-wind":
    case "鼎":
      return ["初六", "九二", "九三", "九四", "六五", "上九"];
    case "thunder-thunder":
    case "震":
      return ["初九", "六二", "六三", "九四", "六五", "上六"];
    case "mountain-mountain":
    case "艮":
      return ["初六", "六二", "九三", "六四", "六五", "上九"];
    case "wind-mountain":
    case "渐":
      return ["初六", "六二", "九三", "六四", "九五", "上九"];
    case "thunder-swamp":
    case "归妹":
      return ["初九", "九二", "六三", "九四", "六五", "上六"];
    case "thunder-fire":
    case "丰":
      return ["初九", "六二", "九三", "九四", "六五", "上六"];
    case "fire-mountain":
    case "旅":
      return ["初六", "六二", "九三", "九四", "六五", "上九"];
    case "wind-wind":
    case "巽":
      return ["初六", "九二", "九三", "六四", "九五", "上九"];
    case "swamp-swamp":
    case "兑":
      return ["初九", "九二", "六三", "九四", "九五", "上六"];
    case "wind-water":
    case "涣":
      return ["初六", "九二", "六三", "六四", "九五", "上九"];
    case "water-swamp":
    case "节":
      return ["初九", "九二", "六三", "六四", "九五", "上六"];
    case "wind-swamp":
    case "中孚":
      return ["初九", "九二", "六三", "六四", "九五", "上九"];
    case "thunder-mountain":
    case "小过":
      return ["初六", "六二", "九三", "九四", "六五", "上六"];
    case "water-fire":
    case "既济":
      return ["初九", "六二", "九三", "六四", "九五", "上六"];
    case "fire-water":
    case "未济":
      return ["初六", "九二", "六三", "九四", "六五", "上九"];
  }
}

function answer(guaYao) {
  switch (guaYao) {
    case "乾初九":
      return "潜藏的龙在深渊 暂时无法施展";
    case "乾九二":
      return "龙正在走出低谷 运用德行寻求机会（有利于大才大德的是出世）";
    case "乾九三":
      return "龙虽处境艰难 但坚持不懈 不断努力 即使遇到危险 也可避祸";
    case "乾九四":
      return "龙跳进深渊 伺机而动 没有灾难 时而上跃 时而潜退";
    case "乾九五":
      return "龙在天空中飞 大有所为";
    case "乾上九":
      return "升腾到极限的龙 会有灾祸之困";
    case "坤初六":
      return "阴冷天气逐渐形成 要遵循规律向前推进 寒冬将至";
    case "坤六二":
      return "具有一定美德 行事都是有利的"; // @TODO
    case "坤六三":
      return "具备美好品德 可以坚守正道 事情起初无所发展 但最后有好的结果";
    case "坤六四":
      return "谨言慎行 就会避免灾祸";
    case "坤六五":
      return "穿着黄色的裙裳 大吉大利";
    case "坤上六":
      return "人走到了群困的绝境 有灾祸"; // @TODO
    case "屯初九":
      return "虽然徘徊难进 但志行贞正 可坚持以退为进的策略";
    case "屯六二":
      return "首次出行 徘徊难进 女性十年才能孕育 前进艰难 现象较为反常";
    case "屯六三":
      return "放弃前行 若一意孤行 会有灾祸";
    case "屯六四":
      return "乘马的人纷纷而来 有婚配的欲求 会心想事成";
    case "屯九五":
      return "囤积资源 少囤积有利 过度囤积会有灾祸";
    case "屯上六":
      return "乘马的人纷纷而来 悲伤悲痛的情况发生";
    case "蒙初六":
      return "愚昧的初期 有利于用刑法惩治坏人 并且给冤屈者脱去枷锁 如果不专心学习去做事 将会带来困境"; // @TODO
    case "蒙九二":
      return "包容愚昧 和 娶妻 吉祥 儿子可以持家了";
    case "蒙六三":
      return "不适合娶这个女人为妻 因为此女子会遇男色而失身 这种行为不好导致不适合结婚 结果也不会好";
    case "蒙六四":
      return "被蒙昧无知的人所困惑 最终会有灾难";
    case "蒙六五":
      return "愚昧无知的人接受启发 吉兆";
    case "蒙上九":
      return "惊醒愚昧无知的人 不宜行为过当 不利于做贼寇 有利于防御贼寇"; // @TODO
    case "需初九":
      return "在郊野中等待 适宜持之以恒 可避免灾祸";
    case "需九二":
      return "身处沙地 虽然早到校人的责难 但最终是吉利的";
    case "需九三":
      return "在泥泞中行走 招致贼寇前来";
    case "需六四":
      return "身处血泊中 需要尽快逃离险境";
    case "需九五":
      return "在享用酒食中等待 正固吉祥";
    case "需上六":
      return "进入洞穴 虽然会看到不速之客 但尊敬他们 最后获得吉祥";
    case "讼初六":
      return "不要长期困于官司 减少口舌是非 最终获得吉祥";
    case "讼九二":
      return "官司失利后 应回家躲避 逃到小国 息事宁人";
    case "讼六三":
      return "应该安享旧日俸禄 不要起贪念 若是辅佐君王做事 包括从事公务员工作 即使取得了成就 也不要居功自傲";
    case "讼九四":
      return "不再起诉 安于现状 正固吉祥";
    case "讼九五":
      return "官司得到了公正的判决 吉祥";
    case "讼上九":
      return "得到官位 但会多次失去 建议停止诉讼 议和"; // @TODO
    case "师初六":
      return "军纪严明 否则有灾祸";
    case "师九二":
      return "率军出征 坚守正道 不偏不倚 可获吉祥 无灾祸 君王会多次嘉奖";
    case "师六三":
      return "士兵从战场上运辉尸体 凶险";
    case "师六四":
      return "率军及时撤退 可避祸";
    case "师六五":
      return "田间有动物 象征着有利于发表观点 无灾祸 有德的人可统帅军队 无德的人会战败 即使坚守正道也有凶相";
    case "师上六":
      return "天子颁布诏命 论功封爵 需要重用君子远离小人";
    case "比初六":
      return "以诚待人 会得到更多的朋友 吉祥";
    case "比六二":
      return "加强内部团结 来辅佐君主 吉祥";
    case "比六三":
      return "与匪为友 交不到合适的朋友"; // @TODO
    case "比六四":
      return "交往中相互信任 加强团结 吉祥";
    case "比九五":
      return "光明正大交往 君王用三趣之礼狩猎 失去前面的禽兽 老百姓不怕君王 吉祥"; // @TODO
    case "比上六":
      return "结交不到首领 凶相";
    case "小畜初九":
      return "重复自己的做事风格 无灾且吉祥";
    case "小畜九二":
      return "被牵连而返回本位 吉祥";
    case "小畜九三":
      return "大车脱落了辐条 夫妻反目失和";
    case "小畜六四":
      return "有诚信 不再忧虑 从恐惧中走出来 无灾祸";
    case "小畜九五":
      return "诚信相连 与邻居共享富裕";
    case "小畜上九":
      return "所需雨水已积满 积德载物 日月同辉 出战凶险"; // @TODO
    case "履初九":
      return "衣着朴实无华 无灾祸";
    case "履九二":
      return "走在平坦的大道上 安然的人占问此卦吉祥";
    case "履六三":
      return "眼睛快要瞎了 但勉强能看到一点点 腿跛了 但勉强能走几步 不小心踩在老虎尾巴上 老虎回头就咬人 凶险 勇敢的武士要竭力为君主效劳";
    case "履九四":
      return "踩在老虎尾巴上 恐惧最后退去 吉祥";
    case "履九五":
      return "奋不顾身 冒然前行 占卜此卦者 凶";
    case "履上九":
      return "不断反思审视自己的所作所为 最终吉祥";
    case "泰初九":
      return "拔出的茅草离开地面向上是吉利征兆 出征吉祥";
  }
}

function request(data) {
  // calculate the gua & yao
  const xiaGua = convertToGua(data["xia"] % 8);
  const shangGua = convertToGua(data["shang"] % 8);
  const yaoCi = convertToYao(data["yao"] % 6);

  // convert gua & yao to one of 64 varients
  const gua = allGuas(`${shangGua}-${xiaGua}`);
  const yao = allYaos(gua)[yaoCi];

  console.log(gua, yao);
}

export default function Home() {
  const { register, handleSubmit } = useForm();
  // Concept: enter 3 3-digits numbers, make api call, get result

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
        <form onSubmit={handleSubmit(request)}>
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
      </main>

      <footer>Developed by Damengrandom</footer>
    </>
  );
}
