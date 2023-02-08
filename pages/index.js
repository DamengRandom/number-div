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
      return "具备美好品德 可以正固 事情起初无所发展 但最后有好的结果";
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
      return "率军出征 正固 不偏不倚 可获吉祥 无灾祸 君王会多次嘉奖";
    case "师六三":
      return "士兵从战场上运辉尸体 凶险";
    case "师六四":
      return "率军及时撤退 可避祸";
    case "师六五":
      return "田间有动物 象征着有利于发表观点 无灾祸 有德的人可统帅军队 无德的人会战败 即使正固也有凶相";
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
    case "泰九二":
      return "有包容大川似的宽广胸怀 可以徒步涉过大河急流 礼贤下士 对远方的贤德之人也不遗弃 不结成小团体 不结党营私 能够辅佐公正有道德的君主";
    case "泰九三":
      return "处境艰难 正固 没有灾祸 不要怕不能取信于人 在饮食方面有口福之吉";
    case "泰六四":
      return "像小鸟一样翩翩起舞 因不与邻居共享富有 互相不加戒备 以诚相待"; // @TODO
    case "泰六五":
      return "帝乙嫁女 因此而获得福泽 最为吉祥";
    case "泰上六":
      return "城墙倒塌在城壕里 不宜用兵 在城邑中祷告天命 占问必艰难之兆";
    case "否初六":
      return "拔出的茅草离开地面向上 吉利征兆 有为";
    case "否六二":
      return "被包容并顺从承受尊者 小人可获吉祥 君子则需要躲避 通达"; // @TODO
    case "否六三":
      return "被包容而居于下位 最终招致羞辱";
    case "否九四":
      return "得到君王授命 没有灾祸 众人依附 共享福禄";
    case "否九五":
      return "君子不用躲避 君子可获吉祥 将要灭亡 将要灭亡 白自己拴在大桑树上 就会安然无恙";
    case "否上九":
      return "苦尽甘来 皆大欢喜";
    case "同人初九":
      return "走出大门 与人亲近 无灾祸";
    case "同人六二":
      return "亲近同族的人 必然艰难";
    case "同人九三":
      return "在草丛中设好伏兵 登高望远 三年不能发动战争";
    case "同人九四":
      return "占据城头之上 自行退兵而不进攻 可获吉祥";
    case "同人九五":
      return "与人同心同德 先哭后笑 大军会师 庆祝胜利";
    case "同人上九":
      return "与人在郊外亲善和睦 不会有困厄";
    case "大有初九":
      return "有人交往 不涉及利害 自然不会招致灾祸 须知 需要经历艰辛 才可避免灾祸";
    case "大有九二":
      return "用大车载物 无论去哪里 都不会有灾祸";
    case "大有九三":
      return "公候按时向天子进贡 小人做不到这一点"; // @TODO
    case "大有九四":
      return "不骄不躁 无灾祸";
    case "大有六五":
      return "胸怀坦荡 上下以诚相待 威严自显 可获吉祥";
    case "大有上九":
      return "会得到上天的帮助 吉祥而无不利";
    case "谦初六":
      return "谦虚而富有美德的君子 梵语大江大河 可获吉祥";
    case "谦六二":
      return "谦虚之名传扬外界 正固吉祥";
    case "谦九三":
      return "有功而谦虚 君子保持谦逊 正固吉祥";
    case "谦六四":
      return "发扬谦逊美德 行事无往不利";
    case "谦六五":
      return "与邻国同遭侵略 则需共同应战 如此无往不利";
    case "谦上六":
      return "谦虚之名传扬外界 利于兴兵征伐 占领新的领地";
    case "豫初六":
      return "因喜悦而闻名 有凶险"; // @TODO
    case "豫六二":
      return "德行坚贞胜过磐石 不浪费生命 正固吉祥"; // @TODO
    case "豫六三":
      return "小人媚上以逸乐惑主 会有忧悔 悔恨太迟会更后悔"; // @TODO
    case "豫九四":
      return "喜乐自来 会有大的收获 不比猜疑 像簪子聚拢头发一样将朋友们聚集在一起";
    case "豫六五":
      return "占问疫病吉凶 得此卦者 会病期长 但不会死亡";
    case "豫上六":
      return "已处在天昏地暗的局面 去沉溺于寻欢作乐 十分危险， 若改弦更张 可避免灾祸";
    case "随初九":
      return "官位有变动 利于正固 吉祥 出门交友不会有过失"; // @TODO
    case "随六二":
      return "依附小人会失去德高望重的人";
    case "随六三":
      return "依附德高望重的人会失去小人 跟随有追求的人会有所得 利于正固";
    case "随九四":
      return "跟随别人去获得利益 即便守正道 也是凶 有诚信的做事 光明磊落 怎么会有错";
    case "随九五":
      return "真诚的随从嘉言善行 吉祥";
    case "随上六":
      return "先拘押起来 后又捆绑起来 成为君王祭祀在西山的牺牲品"; // @TODO
    case "蛊初六":
      return "改正父亲的过失 有了这样的儿子 父辈以及父辈以上可避免灾祸 即使开始会有危险 最后可获得吉祥";
    case "蛊九二":
      return "改正母亲的过失 不能固守专断"; // @TODO
    case "蛊九三":
      return "改正父亲的过失 即便遭遇小困难 但无大灾";
    case "蛊六四":
      return "姑息纵容父亲的过错 往往出现艰难";
    case "蛊六五":
      return "改正父亲的过失 会得到赞誉";
    case "蛊上九":
      return "不侍奉王侯 专心自己的领域是高尚的";
    case "蛊上九":
      return "不侍奉王侯 专心自己的领域是高尚的"; // @TODO
    case "临初九":
      return "心怀感化之心降临到民众 可获吉祥";
    case "临九二":
      return "心怀感化之心降临到民众 吉祥 无所不利";
    case "临六三":
      return "居高临下 靠甜言蜜语督导 无利 已然知晓自己的过失 无灾祸"; // @TODO
    case "临六四":
      return "亲子体察民情 无灾祸";
    case "临六五":
      return "以聪明才智实行督导 可以视为王道 可获吉祥";
    case "临上六":
      return "敦厚宽仁 体察民情 可获吉祥 无灾祸";
    case "观初六":
      return "以孩童的视角观察事物 小人没有灾祸 君子会有灾祸";
    case "观六二":
      return "暗中窥探观察 适宜女子正固";
    case "观六三":
      return "观察别人对自己的反应 查醒自己的言行 审时度势 小心谨慎的进退"; // @TODO
    case "观六四":
      return "观察一个国家的风土人情 适宜用宾客之力朝见君王";
    case "观九五":
      return "观察同国的民情 君子无灾祸"; // @TODO
    case "观上九":
      return "观察外国的民情 君子无灾祸";
    case "噬嗑初九":
      return "脚上带上木枷 损伤了脚趾 无灾祸";
    case "噬嗑六二":
      return "咬食肥肉 使鼻子陷入肉中 无灾祸";
    case "噬嗑六三":
      return "咬腊肉干 中了毒 小有不顺 无灾祸";
    case "噬嗑九四":
      return "施用刑罚惩戒犯人 像咬带骨的肉一样困难 具有铜箭一样的刚正之气 有利于在艰难的时候正固 可获吉祥"; // @TODO
    case "噬嗑六五":
      return "吃风干的肉 得到黄金 正固思危 无灾祸";
    case "噬嗑上九":
      return "肩带木枷遮住耳朵 有凶险";
    case "贲初九":
      return "修饰脚趾弃车步行而走";
    case "贲六二":
      return "修饰胡须 为了与上司一起"; // @TODO
    case "贲九三":
      return "修饰过后再加以润色 长期正固吉祥";
    case "贲六四":
      return "修饰得如此雅致 骑的白马有如此纯洁无暇 不是盗寇 是来求婚的佳人";
    case "贲六五":
      return "修饰山丘园林 用了大量的布帛 艰难 但最终会获得吉祥";
    case "贲上九":
      return "以白色为装饰 无灾祸";
    case "剥初六":
      return "剥落床体从床脚开始 致使床腿损坏 有凶险";
    case "剥六二":
      return "剥落床体从床头开始 致使床头损坏 有凶险";
    case "剥六三":
      return "剥落 无灾祸";
    case "剥六四":
      return "剥蚀到床板 有凶险";
    case "剥六五":
      return "像鱼鲜排成一行一样 以宫人的身份受到宠幸 无往不利";
    case "剥上九":
      return "不吃硕大的果子 君子得到民众的拥戴 小人遭到覆巢之灾";
    case "复初九":
      return "行而未远就适时而返 没有造成很大的悔意 大吉大利";
    case "复六二":
      return "停止返回 可获吉祥";
    case "复六三":
      return "频繁的返回 艰难 无灾祸";
    case "复六四":
      return "在行列中能独自返回"; // @TODO
    case "复六五":
      return "敦厚笃诚的返回 不后悔";
    case "复上六":
      return "迷失在返回的途中 有凶险 会有灾难 出兵打仗 最终惨败凶险来自于国君 十年不可以出战"; // @TODO
    case "无妄初九":
      return "不妄为 按照自己的心志 所行 吉祥";
    case "无妄六二":
      return "不耕耘却有收获 不开荒却有良田 则有利于有所作为";
    case "无妄六三":
      return "意想不到的灾祸到来 路人牵走被绳子拴住的耕牛 城里人有灾祸";
    case "无妄九四":
      return "可以正固 无灾祸";
    case "无妄九五":
      return "得了意想不到的疾病 不比用药治疗 自会痊愈";
    case "无妄上九":
      return "切勿妄为 将有灾祸 无益处";
    case "大畜初九":
      return "有危险 适宜停止";
    case "大畜九二":
      return "车身与车轴相分离";
    case "大畜九三":
      return "骏马互相追逐 有利于艰难中正固 每日演练战车防卫 适宜有所作为";
    case "大畜六四":
      return "在牛的角上拴上一根木头 大吉大利";
    case "大畜六五":
      return "是烈性的猪长出牙齿 可获吉祥"; // @TODO
    case "大畜上九":
      return "四通八达的道路 亨通顺畅";
    case "颐初九":
      return "扔下属于你的灵龟 看我吃东西 有凶险"; // @TODO
    case "颐六二":
      return "颠倒颐精养气之道 像高处寻求颐养 兴兵作战会有风险"; // @TODO
    case "颐六三":
      return "违反颐精养气之道 即使正固也有凶险 十年内不能施展才能 无益处";
    case "颐六四":
      return "颠倒颐精养气之道 可获吉祥 像老虎一样凝视 急欲不断的追逐 无灾祸"; // @TODO
    case "颐六五":
      return "违反规律 在家正固 可获吉祥 不可以跨越大江大河";
    case "颐上九":
      return "鲸油颐精养气之道 虽然艰难 可获吉祥 利于渡过大江大河"; // @TODO
    case "大过初六":
      return "用洁净的茅草铺地以陈设祭品 无灾祸";
    case "大过九二":
      return "枯树发芽 老翁娶新妻 无所不利";
    case "大过九三":
      return "房梁弯曲 有凶险";
    case "大过九四":
      return "房梁隆起 可获吉祥 如果有意外发生 则行事艰难";
    case "大过九五":
      return "枯树开花 老妇与少男结合 无灾祸 无赞誉";
    case "大过上六":
      return "徒步过河 被水淹灭了 头顶 有凶险 无灾祸";
    case "坎初六":
      return "在重重险阻之中 掉入陷阱 有凶险";
    case "坎九二":
      return "在陷阱中经历危险 谋求小事 会有获得";
    case "坎六三":
      return "来来回回都处于险难之中 陷穴既险也深 一旦落入陷阱之中 暂时无法施展才能";
    case "坎六四":
      return "将一杯薄酒 两筐淡食 用瓦罐装起来 用窗口收到信约 最后无灾祸"; // @TODO
    case "坎九五":
      return "陷穴尚未满溢 到需要稳定时则艰难自平 无灾祸"; // @TODO
    case "坎上六":
      return "用绳索将犯人捆绑起来放入荆棘草丛之中 三年不让解脱 比有凶险";
    case "离初九":
      return "步子错乱 但保持谨慎恭敬 无灾祸";
    case "离六二":
      return "有黄色附于物 大吉大利";
    case "离九三":
      return "太阳快要落山 如果不能边打击瓦罐边唱歌 就会发出垂老之人的哀叹 有凶险";
    case "离九四":
      return "突如其来 如同火焰熊熊燃烧 会有生命危险 会被抛弃"; // @TODO
    case "离六五":
      return "眼泪涌出的样子 悲戚哀叹的样子 可获吉祥"; // @TODO
    case "离上九":
      return "君王用贤人出兵征伐 对能够斩杀敌方首领的人给予嘉奖 不复活一般的随从 无灾祸"; // @TODO
    case "咸初六":
      return "感应发生在脚上的大拇指 因势而动";
    case "咸六二":
      return "感应发生在小腿肚 有凶险 在家里不出来 可获吉祥";
    case "咸九三":
      return "感应发生在大腿 执迷于盲目追随别人 步履维艰";
    case "咸九四":
      return "可获吉祥 危难窘境会消失 即使心意不安 思绪不绝 朋友最后会顺从你的意愿";
    case "咸九五":
      return "感应发生在脊背上 不会有后悔";
    case "咸上六":
      return "感应发生在 口舌 牙床 面颊 都会因势而动";
    case "恒初六":
      return "有所追求 持续追求过于长 有凶险 无益处";
    case "恒初六":
      return "有所追求 持续追求过于长 即使正固也有凶险 无益处";
    case "恒九二":
      return "窘境会消失";
    case "恒九三":
      return "不能长期保持美德 有时会蒙受羞辱 行事艰难";
    case "恒九四":
      return "田间没有禽兽";
    case "恒六五":
      return "长久的保持美德正固 女人可获得吉祥 男人会处境凶险";
    case "恒上六":
      return "震动不安 不能持之以恒 有凶险";
    case "遁初六":
      return "退避不及 落在后面 有凶险 暂时不宜作为 施展才能";
    case "遁六二":
      return "被黄牛皮绳捆绑 没有人能够逃脱";
    case "遁九三":
      return "由于被牵累而难以逃脱 会生病 有危险 畜养奴仆和侍妾 可获吉祥";
    case "遁九四":
      return "行事有利于逃跑时 君子可获吉祥 小人则难以挣脱";
    case "遁九五":
      return "选择最佳时机退出 可获吉祥";
    case "遁上九":
      return "远走高飞 完全退避 无所不利";
    case "大壮初九":
      return "脚趾变粗壮 出兵征伐 有凶险 需要诚信"; // @TODO
    case "大壮九二":
      return "正固吉祥";
    case "大壮九三":
      return "小人靠力量 君子不这样 正固有危险 公山羊用角顶篱笆 角被缠住"; // @TODO
    case "大壮九四":
      return "正固吉祥 忧悔消除 藩篱被冲破 羊角被解脱出来 像大车的车轮一样结实"; // @TODO
    case "大壮六五":
      return "在田边丢失山羊 不会有忧悔";
    case "大壮上六":
      return "公山羊用角顶篱笆 不能退后 不能前进 无益处 艰难过后可获吉祥";
    case "晋初六":
      return "晋升中遭遇挫折阻碍 正固吉祥 暂时没有收到信任 无灾祸";
    case "晋六二":
      return "晋升中遭遇忧愁 正固吉祥 将会从祖母那里受到宏大的恩泽";
    case "晋六三":
      return "获得众人的信任 忧悔消除";
    case "晋九四":
      return "今生如同 老鼠一样 即贪婪有没有一技之长 正固有危险";
    case "晋六五":
      return "忧悔消除 无需再为得失而忧虑 有所作为可获吉祥 无所不利";
    case "晋上九":
      return "晋升到了顶点 用征讨小国而建立功勋 危中有吉 无灾祸 正固有难";
    case "明夷初九":
      return "光明遭到损伤时 就像飞鸟低垂着翅膀 惊慌飞行 如同君子急行 三天没有吃饭 一旦有所作为 会受到主人的责备"; // @TODO
    case "明夷六二":
      return "光明遭到损伤时 伤到左大腿 如果有良马来救 可获吉祥";
    case "明夷九三":
      return "光明遭到损伤时 在南方狩猎 获得丰厚 不可操之过急 正固"; // @TODO
    case "明夷六四":
      return "进入近臣内侧 洞悉光明损伤的内情 走出院子"; // @TODO
    case "明夷六五":
      return "像箕子受难时一样 正固";
    case "明夷上六":
      return "不光明 晦暗 起初像天空中升起 最后又落到地上";
    case "家人初九":
      return "持家能够预防不测之灾 忧悔消亡";
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
