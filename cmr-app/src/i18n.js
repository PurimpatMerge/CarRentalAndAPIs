import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  th: {
    translation: {
      // Homepage
      // Navbar
      menuhome: "หน้าหลัก",
      lan: "TH",
      //   Hero
      h1: "ทำไม",
      h2: "ถึงเป็นตัวเลือกที่ดีสำหรับคุณ",
      h3: "เรามีข้อเสนอที่ดีสำหรับการเช่ารายวันรายอาทิตย์หรือระยะยาว",
      h4: "เช่าได้ง่ายขั้นตอนไม่ซับซ้อน",
      in1: "สถานที่รับรถ",
      in2: "สถานที่คืน",
      in3: "วันที่รับรถ",
      in4: "วันที่คืนรถ",
      h5: "ทำไมถึงต้องเลือกเช่ารถกับเรา?",
      check1: "มีความปลอดภัย",
      check2: "มีบริการที่ดี",
      check3: "ราคาถูก",
      // sector1
      type1: "ประเภทรถ Eco Car",
      types1:
        "รถประหยัดน้ำมันเหมาะสำหรับขับขี่ในเมืองจะมีเครื่องยนต์เบนซินขนาดไม่เกิน 1,300 ซีซีหรือเครื่องยนต์ดีเซลขนาดไม่เกิน 1,500 ซีซี",
      type2: "ประเภทรถ C-Segment",
      types2:
        "C Segment หรือ Compact Car ขนาดไม่เล็กไม่ใหญ่ มีการเสริมแต่งเครื่องยนต์ และระบบช่วงล่าง มีการเพิ่มสมรรถนะให้ดีมากยิ่งขึ้น รถยนต์ประเภท C Segment จะมีขนาดเครื่องยนต์ประมาณ 1,500 cc. ถึง 2,200 cc.",
      type3: "ประเภทรถ D-Segment",
      types3:
        "เป็นรถที่มีการตกแต่งภายใน เน้นความหรูหรา ใช้วัสดุที่ดีมากขึ้น มีขนาดเครื่องยนต์ประมาณ 2,400 cc ขึ้นไป ตัวรถ ขนาดเครื่องยนต์ใหญ่กว่ารถยนต์ประเภท C Segment",
      type4: "ประเภทรถ EV",
      types4:
        "รถยนต์พลังงานไฟฟ้า 100% หรือ เรียกสั้นๆ ว่า EV(Electric Vehicle) นวัตกรรมที่ใช้เพียงพลังงานไฟฟ้าอย่างเดียว 100% ในการขับเคลื่อน และสามารถชาร์จไฟได้อย่างสม่ำเสมอเมื่อแบตเตอรี่หมด",
      type5: "ประเภทรถ SUV",
      types5:
        "ยานพาหนะที่สามารถขับแบบ Off-road ได้ สำหรับคำว่า รถ SUV นั้น ครอบคลุมถึงรถยนต์ระบบขับเคลื่อนสี่ล้อขนาดใหญ่ เช่น Range Rover และ Chevrolet และยังรวมถึงรถยนต์ขนาดเล็กอย่าง Honda CRV ด้วยเช่นกัน นอกจากนี้รถ SUV ยังมีคุณสมบัติพิเศษคือการใช้งานอย่างยืดหยุ่น สามารถนำไปปรับใช้กับกิจกรรมลุย ๆ ได้หลายอย่าง",
      // Sector2
      contactinformation: "ข้อมูลการติดต่อ",
      contactproblem:
        "เมื่อท่านมีปัญหาต่างๆสามารถสอบถามเราได้ช่วง 9:00 - 20:00 ทุกวัน",
      //Sidelist
      filter: "กรองผลลัพธ์",
      cartype: "ประเภทรถ",
      carbrand: "แบรนด์",
      seats: "ผู้โดยสาร",
      //carlist
      freeservice: "เรามีบริการให้ฟรีดังนี้",
      service:"ประกันคุ้มครองเพิ่มเติมเพื่อลดหรือรับการยกเว้นค่าเสียหายส่วนแรก (Excess) หรือเพื่อคุ้มครองสิ่งต่าง ๆ ที่ไม่ครอบคลุมในประกันที่มีค่าเสียหายส่วนแรก (CDW) เช่น ยางรถและกระจกหน้า",
      priceperday: "ราคา / วัน",
      reservebtn:"จอง",
      //document1
      requiredoc:"เอกสารที่จำเป็น",
      requiredocdetail1:"ใบขับขี่เต็มรูปแบบ (full driving licence) ที่ยังไม่หมดอายุของคนขับแต่ละราย",
      requiredocdetail2:"ใบยืนยันการจองของท่าน",
      requiredocdetail3:"บัตรเครดิตในชื่อของคนขับหลัก",
      requiredocdetail4:"พาสปอร์ตหรือบัตรประชาชนของคนขับแต่ละราย",
      requiredocdetail5:"ท่านจะต้องแสดงเอกสาร 1 รายการจากต่อไปนี้: (a) บอร์ดดิ้งพาสของสายการบิน (b) ตั๋วรถไฟ หรือ (c) ตั๋วเรือโดยสาร โดยจะต้องเป็นเอกสารสำหรับการเดินทางขากลับ และต้องมีข้อมูลวันที่และเวลาเดินทางกลับของท่าน",
      //document2
      payment:"การชำระเงิน",
      paymentdetail1:"1.เตรียมข้อมูลส่วนตัวและข้อมูลการติดต่อ",
      paymentdetail2:"2.อ่านและยืนยันข้อตกลงก่อนทำการเช่า",
      paymentdetail3:"3.ทำการแสกน QR Code เพื่อชำระเงิน",
      //map
      map:"แผนที่",
      //renconfirmcontent
      condition:"เงื่อนไขการให้บริการ",
      conditiondetail1:"ท่านจะขับขี่รถคันนี้ได้ก็ต่อเมื่อมีอายุอย่างน้อย 21 ปี",
      conditiondetail2:"ท่านจะขับขี่รถคันนี้ได้ต้องมีใบอนุญาติการขับขี่",
      conditiondetail3:"ผู้ขับขี่ทุกท่านจะต้องถือใบขับขี่ที่มีอายุอย่างน้อย 3 ปี",
      rent:"เช่า",
      //stepper
      step1:"รายละเอียดผู้รับรถ",
      step2:"ยืนยันการจอง",
      step3:"ชำระเงิน",
      //firststep
      customercontactinformation:"ข้อมูลผู้ติดต่อ",
      rentproblems:"ท่านพบปัญหาในการจองหรือไม่",
      pcontactus:"กรุณาติดต่อเรา",
      rentsummary:"สรุปการจอง",
      pickuplocation:"สถานที่รับรถ",
      returnlocation:"สถานที่คืน",
      pricedetail:"รายละเอียดราคา",
      day:"วัน",
      rentperiod:"ระยะเวลาเช่า",
      totalprice:"ราคาทั้งหมด",
      thb:"บาท",
      //secondstep
      termsandconditions:"ข้อตกลงและเงื่อนไข",
      termsandconditionscontent:"จงอ่านข้อกำหนดและเงื่อนไขข้างล่างนี้ก่อนการใช้เวปไซต์นี้ การใช้งานเว็บไซต์นี้แสดงถึงการยอมรับข้อกำหนดและเงื่อนไขดังนี้ โปรดอ่านข้อกำหนดและเงื่อนไขรวมถึงนโยบายความเป็นส่วนตัวของเรา (เรียกรวมกันว่า ข้อตกลง) และคำถามที่พบบ่อยด้านล่างอย่างละเอียด ก่อนที่จะเข้าถึงเว็บไซต์นี้และ/หรือก่อนการจอง (ทั้งหมดที่กำหนดไว้ด้านล่าง) เพื่อให้เข้าใจสิทธิและภาระผูกพันของคุณ คุณตกลงที่จะผูกพันตามกฎหมายโดยข้อกำหนดเหล่านี้เมื่อมีการเข้าถึงและ/หรือการใช้เว็บไซต์นี้ หากคุณไม่ยอมรับข้อกำหนดเหล่านี้โปรดออกจากเว็บไซต์และหยุดการใช้งานเว็บไซต์และบริการทันทีและไม่ทำการจองใด ๆ ผ่านทางเว็บไซต์ข้อกำหนดและเงื่อนไขของเว็บไซต์ข้อกำหนดและเงื่อนไขการจองออนไลน์ และ ข้อกำหนดและเงื่อนไขของผู้ใช้ออนไลน์และบัญชีของฉันโปรดทราบว่าเราอาจเปลี่ยนแปลง แก้ไข เพิ่มและลบข้อกำหนดเหล่านี้ได้ตลอดเวลาโดยไม่ต้องแจ้งให้ทราบล่วงหน้าต้องอ่านข้อกำหนดเป็นระยะ หากมีการใช้งานเว็บไซต์หลังจากการเปลี่ยนแปลงข้อกำหนดเหล่านี้ ถือว่าผู้เยี่ยมชมผู้ใช้งาน หรือผู้ใช้ที่ลงทะเบียน",
      accept:"ข้าพเจ้ายอมรับข้อตกลงและเงื่อนไข",
      slip:"*กรุณาส่งสลิปการโอนเงินก่อนกดถัดไป",
      contactus:"ติดต่อเรา",
      rentcomplete:"การเช่ารถเสร็จสิ้น รอการติดต่อกลับจากทางบริษัท",
      contactusvia:"ติดต่อเราได้ทาง",
    },
  },
  en: {
    translation: {
      // Homepage
      // Navbar
      menuhome: "Home",
      lan: "EN",
      //   Hero
      h1: "Why",
      h2: "To be a good choice for you",
      h3: "We have great deals for daily, weekly or long term rentals",
      h4: "Easy to rent, simple steps.",
      in1: "Pick up ",
      in2: "Return the car",
      in3: "Pick up date",
      in4: "Return date",
      h5: "Why should you choose to rent a car with us?",
      check1: "High Security",
      check2: "Have good service",
      check3: "Cheap price",
      // sector1
      type1: "Type Eco Car",
      types1:
        "A fuel-efficient vehicle suitable for city driving. There will be a gasoline engine of no more than 1,300 cc. or diesel engine not over 1,500 cc.",
      type2: "Type C-Segment",
      types2:
        "C Segment or Compact Car, the size is not small, not big. There are engine enhancements. and suspension system There is an increase in performance even more. C segment cars have an engine size of approximately 1,500 cc. to 2,200 cc.",
      type3: "Type D-Segment",
      types3:
        "It's a car with an interior. focus on luxury Use more good materials has an engine size of about 2,400 cc or more, the car body, the engine size is larger than that of the C-segment type cars",
      type4: "Type EV",
      types4:
        "100% electric vehicle, or simply called EV (Electric Vehicle), an innovation that uses only 100% electric power to drive. and can be recharged regularly when the battery runs out",
      type5: "Type SUV",
      types5:
        "Off-road capable vehicles The term SUV covers large four-wheel drive vehicles such as the Range Rover and Chevrolet, as well as smaller vehicles such as the Honda CRV. The specialty is flexible use. It can be applied to many activities.",
      // sector2
      contactinformation: "Contact information",
      contactproblem:
        "When you have any problems, you can ask us between 9:00 - 20:00 every day.",
      //Sidelist
      filter: "Filter",
      cartype: "Car type",
      carbrand: "Brand",
      seats: "Passenger",
      //carlist
      freeservice: "We provide free services as follows",
      service:"Additional insurance coverage to reduce or waive excess damage or to cover things not covered by CDW insurance, such as tires and windshields.",
      priceperday: "Price for 1 day",
      reservebtn: "Reserve",
      //document1
      requiredoc:"Required documents",
      requiredocdetail1:"Full driving license (full driving license) that has not expired for each driver.",
      requiredocdetail2:"your booking confirmation",
      requiredocdetail3:"Credit card in the name of the main driver",
      requiredocdetail4:"Passport or ID card of each driver",
      requiredocdetail5:"You will be required to present 1 of the following: (a) Airline boarding pass, (b) Train ticket or (c) Ferry ticket. It must be a document for the return trip. And must include the date and time of your return.",
      //document2
      payment:"Payment Steps",
      paymentdetail1:"1.Prepare personal information and contact information.",
      paymentdetail2:"2.Read and confirm the agreement before renting.",
      paymentdetail3:"3.Scan the QR Code to pay.",
      //map
      map:"Map",
      //renconfirmcontent
      condition:"Terms of Service",
      conditiondetail1:"You can only drive this car if you are at least 21 years old.",
      conditiondetail2:"You must have a driving license to drive this vehicle.",
      conditiondetail3:"All drivers must hold a driver's license that is at least 3 years old.",
      rent:"Rent",
      //stepper
      step1:"Personal information",
      step2:"Booking confirmation",
      step3:"Payment",
      //firststep
      customercontactinformation:"Contact information",
      rentproblems:"Have you encountered a problem with your Rent?",
      pcontactus:"Please contact us",
      rentsummary:"Rent Summary",
      pickuplocation:"Pick up location",
      returnlocation:"Place to return the car",
      pricedetail:"Price details",
      day:"Days",
      rentperiod:"Rental period",
      totalprice:"Total price",
      thb:"THB",
      //secondstep
      termsandconditions:"Terms and Conditions",
      termsandconditionscontent:"Please read the terms and conditions below before using this website. Use of this website implies acceptance of the following terms and conditions. Please read our Terms and Conditions and Privacy Policy. (collectively referred to as the Agreement) and detailed FAQs below. prior to accessing this website and/or prior to booking (all set out below) to understand your rights and obligations. You agree to be legally bound by these terms when accessing and/or using this website. If you do not accept these Terms, please exit the Website and immediately stop using the Website and Services and do not make any bookings through the Website, Website Terms and Conditions, Online Booking Terms and Conditions and Online User and Account Terms and Conditions. Please note that we may change, modify, add and delete these Terms at any time without prior notice. Periodically, the Terms must be read. If the Website is used after a change to these Terms Considered a user visitor or registered users",
      accept:"I accept the terms and conditions",
      slip:"*Please submit the money transfer slip before clicking Next.",
      contactus:"Contact Us",
      rentcomplete:"Completed car rental Waiting for a call back from the company",
      contactusvia:"Contact us via",
      
     
    },
  },
  jp: {
    translation: {
      // Homepage
      // Navbar
      menuhome: "メインページ",
      lan: "日本",
      //   Hero
      h1: "どうして",
      h2: "あなたにとって良い選択になるために.",
      h3: "毎日、毎週、または長期レンタルのお得な情報をご用意しています。",
      h4: "レンタルは簡単、手順は簡単",
      in1: "受け取り場所",
      in2: "返却場所",
      in3: "受取日",
      in4: "返却日",
      h5: "当社のレンタカーを選ぶべき理由は何ですか?",
      check1: "安全です",
      check2: "サービスが良い",
      check3: "安い値段",
      // sector1
      type1: "車種 Eco Car",
      types1: "街乗りに適した低燃費車。ガソリンエンジンは1,300cc 以下 また 1,500cc未満のディーゼルエンジン。",
      type2: "車種 C-Segment",
      types2: "C Segment また Compact Car サイズは小さくなく、大きくありません エンジンの強化があります。とサスペンションシステム さらにパフォーマンスの向上があります。車種 C Segment エンジンサイズは1,500ccから2,200cc程度。",
      type3: "車種 D-Segment",
      types3: "車には内装がある 贅沢に焦点を当てる もっといい素材を使おう エンジンサイズ 約 2,400cc アップ エンジンサイズは C Segment 車よりも大きい。",
      type4: "車種 EV",
      types4: "100%電気自動車 また 略してEV(Electric Vehicle)と呼ばれています。100% 電気エネルギーのみで駆動するイノベーション。電池がなくなったら定期的に充電できます。",
      type5: "車種 SUV",
      types5: "オフロード対応車両。SUVという用語では、大型の四輪駆動車が含まれます 例えば Range Rover と Chevrolet これには、Honda CRV のような小型車も含まれます。さらに、SUVには独自の機能、つまり柔軟な操作があります。多くのアクティビティに使用できます",
      // sector2
      contactinformation:"連絡先",
      contactproblem:"お困りの際は、毎日9:00～20:00までご相談ください。",
      //Sidelist
      filter: "フィルター",
      cartype: "車種",
      carbrand: "ブランド",
      seats: "乗客",
      //carlist
      freeservice: "以下のような無料サービスを提供しています。",
      service:"保障保険免責額を減額または免除するための追加。(Excess) または免責保険でカバーされないものをカバーする (CDW) 車のタイヤやフロントガラスなど。",
      priceperday: "1日の料金",
      reservebtn:"予約",
      //document1
      requiredoc:"必要書類",
      requiredocdetail1:"完全な運転免許証 (full driving licence) 各ドライバーの有効期限が切れていない",
      requiredocdetail2:"予約確認書",
      requiredocdetail3:"メインドライバー名義のクレジットカード",
      requiredocdetail4:"各運転者のパスポートまたは ID カード",
      requiredocdetail5:"以下のいずれかの書類をご提示いただく必要があります。: (a) 航空会社の搭乗券 (b) 列車チケット また (c) 客船チケット 復路の書類である必要があります また、帰国の日付と時刻を含める必要があります。",
      //document2
      payment:"支払い",
      paymentdetail1:"1.個人情報と連絡先情報を提供します。",
      paymentdetail2:"2.レンタル前に規約を読んで確認してください。",
      paymentdetail3:"3.QRコードを読み取って支払います。",
      //map
      map:"地図",
      //renconfirmcontent
      condition:"利用規約",
      conditiondetail1:"この車両を運転できるのは 21 歳以上の方のみです。",
      conditiondetail2:"この車両を運転するには、運転免許証が必要です。",
      conditiondetail3:"すべてのドライバーは、少なくとも 3 年経過した運転免許証を保持している必要があります。",
      rent:"予約",
      //stepper
      step1:"ドライバーの詳細",
      step2:"予約確認",
      step3:"支払い",
      //firststep
      customercontactinformation:"連絡先",
      rentproblems:"予約に問題がありますか？",
      pcontactus:"お問い合わせください",
      rentsummary:"予約概要",
      pickuplocation:"受け取り場所",
      returnlocation:"返却場所",
      pricedetail:"価格詳細",
      day:"日",
      rentperiod:"レンタル期間",
      totalprice:"合計金額",
      thb:"バーツ",
      //secondstep
      termsandconditions:"規約と条件",
      termsandconditionscontent:"このウェブサイトを使用する前に、以下の利用規約をお読みください。 このウェブサイトを使用することは、以下の利用規約に同意することを意味します。 利用規約とプライバシー ポリシーをお読みください。 （総称して本契約といいます） 詳細な FAQ は以下にあります。 このウェブサイトを訪問および/または予約する前に (すべて以下で定義) あなたの権利と義務を理解するため このウェブサイトにアクセスおよび/または使用することにより サインアップすることにより、これらの条件に法的に拘束されることに同意したことになります。 これらの利用規約に同意しない場合は、ウェブサイトを終了し、ウェブサイトとサービスの使用を直ちに中止し、ウェブサイト、ウェブサイト利用規約、オンライン予約利用規約、オンライン ユーザーおよびアカウント利用規約を通じて予約を行わないでください。当社は、本規約を予告なく変更、修正、追加、削除することがありますので、定期的に本規約をお読みください。 本規約の変更後に本ウェブサイトを利用する場合 ユーザー訪問者とみなされる または登録ユーザー",
      accept:"利用規約に同意します",
      slip:"※「次へ」をクリックする前に、振込票を提出してください。",
      contactus:"お問い合わせ",
      rentcomplete:"完成車レンタル 会社からの折り返しの電話を待っています",
      contactusvia:"お問い合わせ",
    },
  },
  cn: {
    translation: {
      // Homepage
      // Navbar
      menuhome: "主页",
      lan: "中國人",
      //   Hero
      h1: "为什么",
      h2: "成为您的好选择",
      h3: "我们有每日、每周或长期租金的超值优惠",
      h4: "租房方便，步骤简单.",

      in1: "地点接车",
      in2: "地点还车",
      in3: "日期接车",
      in4: "日期还车",
      h5: "你为什么要选择和我们一起租车？",
      check1: "是安全的",
      check2: "好服务",
      check3: "便宜的价格",
      // sector1
      type1: "车型 Eco Car",
      types1: "车节省燃料适合在城市里开车 汽油发动机不会超过 1,300 cc。或者 柴油发动机不超过 1,500 cc。",
      type2: "车型 C-Segment",
      types2: "C Segment 或者 Compact Car 不太小，也不太大 有引擎增强功能 和悬挂系统 性能提升更多。车型 C-Segment 发动机尺寸约 1,500 cc. 至 2,200 cc.",
      type3: "车型 D-Segment",
      types3: "这辆车有内饰。专注于奢侈品 使用更好的材料 发动机尺寸约 2,400 cc. 或更大 车辆的发动机尺寸比 C-Segment 型大。",
      type4: "车型 EV",
      types4: "100% 电动汽车 或者 简称 EV (Electric Vehicle)。仅使用 100% 并且可以在电池电量耗尽时定期充电",
      type5: "车型 SUV",
      types5: "越野车辆。 对于 SUV 这个词 涵盖大型四轮驱动车辆 电能驱动的创新 比如路虎揽胜和雪佛兰 这还包括小型汽车，如本田 CRV。此外,SUV 还有一个特点就是使用灵活 它可以应用于许多活动。",
      // sector2
      contactinformation:"联系信息",
      contactproblem:"当您有任何问题时,您可以在每天的9:00-20:00之间询问我们。",
      //Sidelist
      filter: "筛选结果",
      cartype: "车型",
      carbrand: "品牌",
      seats: "乘客",
      //carlist
      freeservice: "我们提供以下免费服务：",
      service:"额外的保护保险以减少或免除免赔额 (Excess) 或涵盖免赔额保险未涵盖的事项 (CDW) 示例包括汽车轮胎和挡风玻璃。",
      priceperday: "1天价格",
      reservebtn:"预订",
      //document1
      requiredoc:"所需文件",
      requiredocdetail1:"正式驾驶执照 (full driving licence) 每个驱动程序尚未过期",
      requiredocdetail2:"您的预订确认",
      requiredocdetail3:"主驾名下的信用卡",
      requiredocdetail4:"每个司机的护照或身份证",
      requiredocdetail5:"您将需要出示以下文件之一 : (a) 航空公司登机牌 (b) 火车票 或者 (c) 客船票 它必须是回程的文件 并且必须包括您返回的日期和时间。",
      //document2
      payment:"支付",
      paymentdetail1:"1.提供个人信息和联系信息。",
      paymentdetail2:"2.租用前阅读并确认条款。",
      paymentdetail3:"3.扫描二维码进行支付。",
      //map
      map:"地图",
      //renconfirmcontent
      condition:"服務條款",
      conditiondetail1:"只有年满 21 岁才能驾驶这辆车。",
      conditiondetail2:"您必须持有驾驶执照才能驾驶该车辆。",
      conditiondetail3:"所有司机必须持有至少 3 年有效的驾照。",
      rent:"预订",
      //stepper
      step1:"司机资料",
      step2:"预订确认通知",
      step3:"支付",
      //firststep
      customercontactinformation:"联系信息",
      rentproblems:"您在预订时遇到过问题吗？",
      pcontactus:"请联系我们",
      rentsummary:"预订摘要",
      pickuplocation:"接人的地方",
      returnlocation:"还车地点",
      pricedetail:"价格详情",
      day:"天",
      rentperiod:"租赁期",
      totalprice:"总价",
      thb:"铢",
      //secondstep
      termsandconditions:"条款和条件",
      termsandconditionscontent:"在使用本网站之前，请阅读以下条款和条件。 使用本网站即表示接受以下条款和条件。 请阅读我们的条款和条件以及隐私政策。 （统称为 协议） 以及下面详述的常见问题。 在访问本网站之前和/或在进行预订之前 (全部定义如下) 了解您的权利和义务 您同意在访问和/或使用本网站时受这些条款的法律约束。 如果您不接受这些条款，请退出网站并立即停止使用网站和服务，并且不要通过网站、网站条款和条件、在线预订条款和条件以及在线用户和帐户条款和条件进行任何预订。请请注意，我们可能随时更改、修改、添加和删除这些条款，恕不另行通知。必须定期阅读这些条款。 如果在更改这些条款后使用网站 被认为是用户访问者 或注册用户",
      accept:"我接受条款和条件",
      slip:"*请在点击下一步之前发送汇款单。",
      contactus:"联系我们",
      rentcomplete:"租车等 公司与您联系。",
      contactusvia:"通过以下方式联系我们",
    },
    },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "th", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
