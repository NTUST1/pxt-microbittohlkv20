//% weight=0 color=#9911b1 icon="\uf0ad" block="Microbithlkv20"
     enum mode {
        //% block="喚醒詞"
        wakeup_uni,
        //% block="退下"
        exitUni,
        //% block="打開風扇"
        openElectricfan,
        //% block="關閉風扇"
        closElectricfan,
        //% block="打開空調"
        openkongtiao,
        //% block="關閉空調"
        closekongtiao,
        //% block="升高溫度"
        shenggaowendu,
        //% block="降低溫度"
        jiandiwendu,
        //% block="打開檯燈"
        turnon,
        //% block="關閉檯燈"
        turnoff,
        //% block="開燈"
        openled,
        //% block="關燈"
        closeled,
        //% block="調到最亮"
        setmaxld,
        //% block="調到最暗"
        setminld,
        //% block="亮一點"
        zeogjialiangdu,
        //% block="調暗一點"
        jianxiaoliangdu,
        //% block="燈紅色"
        setcolorred,
        //% block="打開浴霸"
        dakaiyuba,
        //% block="關閉浴霸"
        guanbiyuba,
        //% block="打開暖氣"
        kdakainuanqi,
        //% block="關閉暖氣"
        kguanbinuanq,
        //% block="打開吹風"
        dakaicfeng,
        //% block="關閉吹風"
        kguanbicfeng,
        //% block="打開飲水機"
        dakaiyingsji,
        //% block="關閉飲水機"
        guanbiyingsji,
        //% block="開始出水"
        kaishichus,
        //% block="停止出水"
        tingzchus,
        //% block="打開開關"
        dakaikaiguan,
        //% block="關閉開關"
        guanbikaiguan,
        //% block="打開殺菌"
        dakaishaj,
        //% block="關閉殺菌"
        guanbishaj,
        //% block="打開烘乾"
        dakaihonggan,
       //% block="關閉烘乾"
       guanbihonggan,
       //% block="打開除臭"
       dakaichuchou,
       //% block="關閉除臭"
       gaunbichuchou,
       //% block="一小時候關機"
       settiConehonor,
       //% block="一小時後開機"
       settiOonehonor,
       //% block="加大音量"
       volumeUp,
       //% block="減少音量"
       volumeDown
     }
let check_word = ['wakeup_uni', 'exitUni',"openElectricfan","closElectricfan","openkongtiao","closekongtiao","shenggaowendu","jiandiwendu","turnon","turnoff","openled","closeled","setmaxld","setminld","zeogjialiangdu","jianxiaoliangdu","setcolorred","dakaiyuba","guanbiyuba","kdakainuanqi","kguanbinuanq","dakaicfeng","kguanbicfeng","dakaiyingsji","guanbiyingsji","kaishichus","tingzchus","dakaikaiguan","guanbikaiguan","dakaishaj","guanbishaj","dakaihonggan","guanbihonggan","dakaichuchou","gaunbichuchou","settiConehonor","settiOonehonor","volumeUp","volumeDown"];
namespace microbithlkv20 {
let readserialdata='';

    //% blockId=setserialMicrobit block="Initialize Microbit |TX %tx|RX %rx|Baud rate %baudrate "
    //% tx.defl=SerialPin.P0
    //% rx.defl=SerialPin.P1
    //% weight=102
    //% blockExternalInputs = 1
    export function setserialMicrobit(tx: SerialPin, rx: SerialPin, baudrate: BaudRate) {
        serial.redirect(
            tx,
            rx,
            baudrate
        )
        basic.pause(100)
        serial.setTxBufferSize(32)
        serial.setRxBufferSize(32)
    }
    //% blockId=returnserialdata1 block="read"
    //% weight=101
    export function returnhlkserialdata1() {
           let a = serial.readBuffer(1)
           readserialdata = readserialdata + String.fromCharCode(a.getNumber(NumberFormat.UInt8LE, 0));
    }  

    //% blockId=returnresponse block="return %word "
    //% weight=100
    export function returnhlkresponse(word: string):boolean {
        if (readserialdata.includes(word))
        {
          readserialdata='';
          return true
        }else
          return false
    }     
    //% blockId=words block="%word "
    //% weight=99
    export function words(word: mode):string {
        return check_word[word];
    } 
}
