<template>
    <div class="main">
        <div v-for="(item, index) in newArr" :key="index">
            <div class="flexWrap">
                <div class="logo">
                    <!-- <img :src="require('@/assets/images/' + abc + '/logo.png')" />  -->
                    <img src="@/assets/images/zh-TW/logo.png"  v-show="abc == 'zh-CN' || abc =='zh-TW'" style="width:38.875rem;margin-top:7.6875rem"/> 
                    <img src="@/assets/images/ko/logo.png"  v-show="abc == 'ko'" style="width:35.5rem;margin-top:5.25rem"/> 
                    <img src="@/assets/images/ja/logo.png"  v-show="abc == 'ja'" style="width:26.4375rem;margin:5rem 0 32.5rem"/> 
                    <img src="@/assets/images/en/logo.png"  v-show="abc == 'en'" style="width:30.9375rem;margin-top:4.875rem"/> 
                </div>
                <div class="btnWrap">
                    <div class="note">
                        <img :src="require('@/assets/images/' + abc + '/note.png')" /> 
                    </div>
                    <div class="btn"  @click="handleLead" :class="{opa:opacc }" >
                        <img :src="require('@/assets/images/' + abc + '/yellow_btn.png')" /> 
                    </div>
                    <div class="blue_btn" @click="handleInquire" >
                        <img :src="require('@/assets/images/' + abc + '/gift.png')" /> 
                    </div>
                </div>
            </div>
            <!-- 预约弹窗 -->
            <div class="reserveFrame" v-show="isFill">
                <div class="reserveModal" id="all">
                    <div class="reserveMain">
                        <div class="title" v-html="item[8] "></div>
                        <div class="npc">
                            <img src="@/assets/images/reserve_npc.png" alt="" />
                        </div>
                        <div class="num">
                            <span>{{ item[9] }}</span>
                            <p>{{appointmentCount}}</p>
                        </div>
                        <div class="inputWrap">
                            <div style="padding:0 1.2rem;">
                            <div>
                                <input type="text"  :placeholder="item[10]" class="mailInput" v-model="mailValue" :disabled="disDis"/>
                            </div>
                            <div class="inputBtn">
                                <input type="text" class="input" :placeholder="item[12]" v-model="VerificationCode" />
                                <button v-show="isTime" class="btn"  :class="{grey:!isIng}">{{item[11]}}</button>
                                <button v-show="!isTime" class="btn disbtn" disabled="disabled"> {{content}}</button>
                            </div>
                            <div class="hint" :class="{ hintOp: !isMessage }">
                                <span>{{ message }}</span>
                            </div>
                            </div>
                            <div class="ido">
                                <div @click="handleNike">
                                    <img v-show="!isNike" src="@/assets/images/radio_yellow.png" alt="" />
                                    <img v-show="isNike" src="@/assets/images/radio_nike.png" alt="" />
                                </div>

                                <span>{{ item[15] }}</span>
                            </div>
                            <div class="receive" >{{ item[13] }}</div>
                        </div>
                        <div class="closeBtn" >
                            <img src="@/assets/images/icon_xx.png" alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
            <!-- 成功弹窗 -->
            <div class="successFrame" v-show="isSuccess">
                <div class="modal">
                    <div class="content" v-if="isHave">
                        <div class="closeBtn" @click="handleCloseS">
                            <img src="@/assets/images/icon_xx.png" alt="" />
                        </div>
                        <!-- <div class="npc"  >
                            <img src="@/assets/images/success_npc.png" alt="" />
                        </div> -->
                        <div class="title" v-html="item[16]"></div>
                        <div class="codeWrap" >
                        <div class="wrap">
                            <div class="iconWrap">
                                <img src="@/assets/images/icon2@2x.png" alt="" />
                                <img src="@/assets/images/archero.png" alt="" style="margin-top:1rem"/>
                                <img src="@/assets/images/icon_punball.png" alt="" style="margin-top:1rem"/>
                            </div>
                            <div class="inputWrapT">
                                <div class="inputFlex">
                                    <div class="inputTitle">{{ item[17] }}:</div>
                                    <input type="text" class="inputext" id="inputKinjarun" v-model="copyKinjarun"/>
                                </div>
                                <div class="inputFlex">
                                    <div class="inputTitle">{{ item[17] }}:</div>
                                    <input type="text" class="inputext" v-model="copyTop" id="inputTop"/>
                                </div>
                                <div class="inputFlex">
                                    <div class="inputTitle">{{ item[17] }}:</div>
                                    <input type="text" class="inputext" id="input" v-model="copyValue"/>
                                </div>
                            </div>
                            <div class="btnWrapT">
                                <div class="inputFlex">
                                    <div class="inputTitle">{{ item[17] }}:</div>
                                    <input  type="button" class="btnT" @click="copyKjr" :value="item[19]"></input>
                                </div>
                                <div class="inputFlex">
                                    <div class="inputTitle">{{ item[17] }}:</div>
                                    <input type="button" class="btnT btn_yellowT" :value="item[19]" @click="copyArchero"></input>
                                </div>
                                <div class="inputFlex">
                                    <div class="inputTitle">{{ item[17] }}:</div>
                                    <input  type="button" class="btnT" @click="copy" :value="item[19]"></input>
                                </div>
                            </div>
                        </div>
                        <div class="precaution">{{ item[20] }}</div>
                        </div>
                        <div class="storeWrap">
                            <a href="https://apps.apple.com/us/app/kinja-run/id1625065102">
                                <img src="@/assets/images/store_a.png" alt="" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.habby.kinjarun">
                                <img src="@/assets/images/store_g.png" alt="" />
                            </a>
                            <a :href="srcUrl">
                                <img :src="require('@/assets/images/' + abc + '/store_f.png')" />
                            </a>
                        </div>
                    </div>
                    <div class="content lower" v-else>
                        <!-- <div class="npcfail"  >
                            <img src="@/assets/images/success_npc.png" alt="" />
                        </div> -->
                        <div class="titlefail" v-html="item[28]" style="margin:0"></div>
                            <div class="storeWrap">
                            <a href="https://apps.apple.com/us/app/kinja-run/id1625065102">
                                <img src="@/assets/images/store_a.png" alt="" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.habby.kinjarun">
                                <img src="@/assets/images/store_g.png" alt="" />
                            </a>
                            <a :href="srcUrl">
                                <img :src="require('@/assets/images/' + abc + '/store_f.png')" />
                            </a>
                        </div>
                        <div class="closeBtn" @click="handleCloseS">
                            <img src="@/assets/images/icon_xx.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { lang } from '@/tool/lang'
export default {
    props: ['language'],
    data() {
        return {
            isHave: true,
            appointmentCount: 0,
            abc: '',
            isSuccess: false,
            isFill: false,
            isNike: true,
            isMessage: false,
            newArr: [{}],
            copyTop: '',
            copyValue: '',
            copyKinjarun: '',
            mailValue: '',
            VerificationCode: '',
            content: '60s', // 按钮里显示的内容
            totalTime: 61, //记录具体倒计时时间,
            isTime: true,
            isIng: true,
            message: '',
            exist: false,
            punballCode: '',
            archeroCode: '',
            kinjarunCode: '',
            timer: null,
            srcList: {
                en: 'https://www.facebook.com/KinjaRun/',
                ja: 'https://www.facebook.com/KinjaRunJP/',
                ko: 'https://www.facebook.com/KinjaRunKR',
                zh: 'https://www.facebook.com/KinjaRunTW'
            },
            srcUrl: '',
            isTest: true,
            disDis: false,
            opacc: false,
            languageSend: ''
        }
    },
    watch: {
        mailValue: function (newValue, oldValue) {
            if (newValue === oldValue) {
                return
            } else {
                this.isIng = true
                this.isTime = true
                window.clearTimeout(this.timer)
            }
        },
        isFill: function (newValue, oldValue) {
            if (newValue) {
                document.documentElement.style.overflowY = 'hidden'
                document.body.parentNode.style.overflowY = 'hidden'
            } else {
                document.documentElement.style.overflowY = 'scroll'
                document.body.parentNode.style.overflowY = 'scroll'
            }
        },
        isSuccess: function (newValue, oldValue) {
            if (newValue) {
                document.documentElement.style.overflowY = 'hidden'
                document.body.parentNode.style.overflowY = 'hidden'
            } else {
                document.documentElement.style.overflowY = 'scroll'
                document.body.parentNode.style.overflowY = 'scroll'
            }
            if (this.$cookies.get('punball')) {
                this.isHave = true
                this.copyValue = this.$cookies.get('punball')
                this.copyTop = this.$cookies.get('archero')
                this.copyKinjarun = this.$cookies.get('kinjarun')
            } else {
                return
            }
        },
        totalTime: function (newValue, oldValue) {
            if (newValue === 0) {
                this.isTime = true
                window.clearTimeout(this.timer)
                this.disDis = false
            }
        }
    },
    created() {
        window.addEventListener(
            'onorientationchange' in window ? 'orientationchange' : 'resize',
            function () {
                if (window.orientation === 180 || window.orientation === 0) {
                    // alert('竖屏状态！')
                }
                if (window.orientation === 90 || window.orientation === -90) {
                    // alert('横屏状态！')
                    document.getElementsByClassName('main')[0].style.height = '160vw'
                }
            },
            false
        )

        this.abc = this.language
        this.srcUrl = this.srcList[this.language.substr(0, 2)]
        for (var i in lang) {
            this.newArr[0][i] = lang[i][this.language]
        }
        if (this.language === 'en' || this.language === 'ja') {
            this.opacc = true
        }
        var wlh = document.location.href
        if (wlh.indexOf('test') === -1 && wlh.indexOf('localhost') === -1) {
            this.isTest = false
        } else {
            this.isTest = true
        }

        if (this.language === 'zh-CN') {
            this.languageSend = 'zh-TW'
        } else {
            this.languageSend = this.language
        }
    },
    methods: {
        handleLead() {
            this.isFill = true
            this.VerificationCode = ''
            // this.isTime = true
        },
        handleInquire() {
            if (this.$cookies.get('punball')) {
                this.isSuccess = true
                this.copyValue = this.punballCode
                this.copyTop = this.archeroCode
                this.copyKinjarun = this.kinjarunCode
            } else {
                this.isFill = true
                this.VerificationCode = ''
            }
        },
        handleCloseS() {
            this.isSuccess = false
        },
        handleCloseR() {
            this.isFill = false
            // window.clearTimeout(this.timer)
        },
        handleNike() {
            this.isNike = !this.isNike
        },
        countDown() {
            this.timer = window.setInterval(() => {
                this.totalTime--
                this.content = this.totalTime + 's'
                this.isTime = false
                if (this.totalTime === 0) {
                    this.isTime = true
                    window.clearTimeout(this.timer)
                    return
                }
            }, 1000)
        },
        copyArchero() {
            const input = document.getElementById('inputTop')
            input.value = this.copyTop
            // 聚焦
            input.focus()
            // 选择需要复制的文本
            if (input.setSelectionRange) {
                input.setSelectionRange(0, input.value.length)
            } else {
                input.select()
            }
            try {
                const result = document.execCommand('copy')
                if (this.isTest) {
                    window.location = `https://test-h5-archero.habby.com?language=${this.languageSend}&code=${this.copyTop}`
                } else {
                    window.location = `https://h5-archero.habby.com?language=${this.languageSend}&code=${this.copyTop}`
                }
            } catch (e) {
                console.error('复制失败，请重试~')
            }
        },
        copy() {
            const input = document.getElementById('input')
            input.value = this.copyValue
            // 聚焦
            input.focus()
            // 选择需要复制的文本
            if (input.setSelectionRange) {
                input.setSelectionRange(0, input.value.length)
            } else {
                input.select()
            }
            try {
                const result = document.execCommand('copy')
                if (this.isTest) {
                    window.location = `https://test-giftpunball.habby.com?language=${this.languageSend}&code=${this.copyValue}`
                } else {
                    window.location = `https://giftpunball.habby.com?language=${this.languageSend}&code=${this.copyValue}`
                }
            } catch (e) {
                console.error('复制失败，请重试~')
            }
        },
        copyKjr() {
            const input = document.getElementById('input')
            input.value = this.copyKinjarun
            // 聚焦
            input.focus()
            // 选择需要复制的文本
            if (input.setSelectionRange) {
                input.setSelectionRange(0, input.value.length)
            } else {
                input.select()
            }
            try {
                const result = document.execCommand('copy')
                if (this.isTest) {
                    window.location = `https://test-gift.kinjarun.com?language=${this.languageSend}&code=${this.copyKinjarun}`
                } else {
                    window.location = `https://gift.kinjarun.com?language=${this.languageSend}&code=${this.copyKinjarun}`
                }
            } catch (e) {
                console.error('复制失败，请重试~')
            }
        }
    }
}
</script>


<style scoped lang="less">
.main {
    .flexWrap {
        height: 100vh;
        padding-bottom: 12rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    user-select: none;
    height: 100vh;
    width: 100%;
    background: url('~@/assets/images/bg1.png') no-repeat center;
    background-size: cover;

    font-weight: 600;
    .logo {
        width: 100%;
        padding: 0 6.25rem;
        img {
            width: 100%;
            max-width: 490px;
        }
    }
    .note {
        padding: 0 3rem;
        img {
            width: 100%;
            max-width: 620px;
        }
    }
    .btnWrap {
        width: 100%;
        margin-top: 3.8125rem;
        position: relative;
        color: white;
        align-items: center;
        .blue_btn {
            margin-top: 3rem;
            img {
                height: 6rem;
                width: auto;
            }
        }
        .btn {
            margin-top: 3rem;

            opacity: 1;
            img {
                height: 8.25rem;
                width: auto;
            }
        }
    }
    // 预约弹窗
    .reserveFrame {
        z-index: 999;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 200vh;
        background: rgba(0, 0, 0, 0.85);
        font-weight: 600;
        .reserveModal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 65.375rem;
            .reserveMain {
                position: relative;
                width: 40.75rem;
                height: 67.375rem;
                background: url('~@/assets/images/modal_bg.png') no-repeat;
                background-size: 100% 100%;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .title {
                    // opacity: 0;
                    margin-top: 15.125rem;
                    font-size: 2.5rem;
                    color: white;
                    flex: 1;
                    z-index: 9;
                    font-weight: 900;
                    text-shadow: 0 0 0.625rem #007eff;
                    // -webkit-text-stroke: 0.05rem #007eff;
                }
                .npc {
                    margin-top: 2.125rem;
                    // position: absolute;
                    // left: -2.125rem;
                    // top: 2.75rem;
                    img {
                        width: 100%;
                    }
                }
                .num {
                    padding: 0 3.75rem;
                    z-index: 9;
                    // display: none;
                    span {
                        float: left;
                        color: white;
                        font-size: 2rem;
                        font-weight: 900;
                        text-shadow: 0 0 0.625rem #007eff;
                        // -webkit-text-stroke: 0.05rem #007eff;
                    }
                    p {
                        color: #fae569;
                        font-size: 6.75rem;
                        // line-height: 7.75rem;
                        font-weight: 600;
                        text-shadow: 0px 3px 0px #000000;
                    }
                }
                .inputWrap {
                    .mailInput {
                        width: 100%;
                        height: 3.625rem;
                        text-align: center;
                        color: #494949;
                        font-size: 1.75rem;
                        border: 2px solid #1581e1;
                        font-weight: 600;
                        margin-bottom: 1.25rem;
                    }
                    .inputBtn {
                        display: flex;
                        justify-content: space-between;
                        height: 3.625rem;

                        .btn {
                            display: inline-block;
                            padding: 0 1.5rem;
                            font-size: 1.5rem;
                            box-sizing: border-box;
                            color: #a53f00;
                            background: #ffde00;
                            border: 2px solid #b54800;
                            font-weight: 600;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            max-width: 60%;
                        }
                        .grey {
                            background: #606266;
                            color: white;
                            border: rgb(207, 175, 133);
                        }
                        .disbtn {
                            background: #606266;
                            color: white;
                            border: rgb(207, 175, 133);
                        }
                        .input {
                            height: 100%;
                            text-align: center;
                            flex: 1;
                            margin-right: 0.5rem;
                            color: #494949;
                            font-size: 1.75rem;
                            border: 2px solid #1581e1;
                            font-weight: 600;
                            min-width: 100px;
                        }
                    }
                    .hint {
                        width: 100%;
                        margin-top: 1rem;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        span {
                            color: #ffe0e0;
                            font-size: 1.75rem;
                            padding: 0.45rem 6.25rem;
                            background: #c10101;
                            border-radius: 2rem;
                        }
                    }
                    .hintOp {
                        opacity: 0;
                    }
                    .ido {
                        margin-top: 0.75rem;
                        color: #ffffff;
                        font-size: 1.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        span {
                            max-width: 94%;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                        }

                        img {
                            width: 2rem;
                            height: auto;
                            margin-right: 0.75rem;
                        }
                    }
                    .receive {
                        background: url('~@/assets/images/yellow.png') no-repeat;
                        background-size: 100% 100%;
                        color: #b64000;
                        font-size: 3rem;
                        padding: 2rem 6rem 3.125rem;
                        display: inline-block;
                        margin-bottom: -4.375rem;
                        margin-top: 1rem;
                        font-weight: 900;
                        // -webkit-text-stroke: .25rem #b84500;
                        text-shadow: 0 0 0.625rem #b84500;
                    }
                }
            }
            .closeBtn {
                position: absolute;
                top: 0;
                right: 0;
                transform: translateX(50%) translateY(-50%);
                img {
                    width: 5.4375rem;
                    height: auto;
                }
            }
        }
    }
    // 成功弹窗
    .successFrame {
        color: white;
        font-weight: 600;
        z-index: 999;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 65.375rem;
            .lower {
                display: flex;
                justify-content: center;
                align-content: center;
                .title {
                    margin: 0;
                }
            }
            .content {
                width: 40.75rem;
                height: 67.375rem;
                background: url('~@/assets/images/modal_bg.png') no-repeat;
                background-size: 100% 100%;
                // border-radius: 1.125rem;
                // box-shadow: 0 0.5rem 3.375rem 0 #6e8eb8;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                padding-top: 15.125rem;

                .npc {
                    position: absolute;
                    left: -2.5rem;
                    top: -3.375rem;
                    img {
                        height: 27.5rem;
                        width: auto;
                    }
                }
                .npcfail {
                    position: absolute;
                    img {
                        height: 27.5rem;
                        width: auto;
                    }
                }
                .titlefail {
                    font-size: 4.5rem;
                    font-weight: 900;
                    text-shadow: 0 0 0.25rem #007eff;
                    z-index: 9;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    // flex: 1;
                    height: 50%;
                }
                .title {
                    z-index: 9;
                    // flex: 1;
                    font-size: 3rem;
                    line-height: 4.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    // margin-left: 10.5rem;
                    font-weight: 900;
                    text-shadow: 0 0 0.25rem #007eff;
                    // -webkit-text-stroke: 0.15rem #007eff;
                }
                .codeWrap {
                    z-index: 10;
                    width: 100%;
                    padding: 0 1.625rem;
                    margin-top: 2.125rem;
                    .wrap {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 0.8rem;

                        .iconWrap {
                            width: 7rem;
                            img {
                                width: 7rem;
                                height: 7rem;
                            }
                        }
                        .inputWrapT {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            margin-left: 1rem;
                            .inputFlex {
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                .inputTitle {
                                    text-align: left;
                                    font-size: 1.5rem;
                                }
                                .inputext {
                                    text-align: center;
                                    margin-right: 0.5rem;
                                    color: #494949;
                                    font-size: 1.2rem;
                                    border: 2px solid #1581e1;
                                    font-weight: 600;
                                    width: 100%;
                                    min-width: 60px;
                                    height: 3.375rem;
                                }
                            }
                        }
                        .btnWrapT {
                            margin-left: 0.6rem;
                            display: flex;
                            flex-direction: column;
                            font-size: 1.5rem;
                            font-weight: 600;
                            justify-content: space-around;
                            .inputTitle {
                                opacity: 0;
                            }
                            .btnT {
                                text-align: center;
                                display: inline-block;
                                background: #41ea45;
                                padding: 0 1rem;
                                color: #01541e;
                                border: 2px solid #04732b;
                                height: 3.375rem;
                                font-size: 1.5rem;
                                width: 100%;
                                box-sizing: border-box;
                            }
                            .btn_yellowT {
                                color: #a53f00;
                                background: #ffde00;
                                border: 2px solid #b54800;
                            }
                        }
                    }
                    .precaution {
                        // opacity: 0;
                        color: #ffea81;
                        font-size: 1.5rem;
                        padding: 0.4rem 0.8rem;
                        line-height: 2.2rem;
                        font-weight: 900;
                        text-shadow: 0 0 1rem #0047c8;
                        // -webkit-text-stroke: 0.04rem #0047c8;
                    }
                }
                .storeWrap {
                    width: 39.9375rem;
                    padding: 1.5rem 0 0;
                    background: #3a5ea3;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-flow: row wrap;
                    a {
                        width: 40%;
                    }
                    a:nth-child(2) {
                        margin-left: 2rem;
                    }
                    img {
                        width: 100%;
                        height: auto;
                        margin-bottom: 1rem;
                    }
                    img:nth-child(2) {
                        margin-left: 1rem;
                    }
                }
            }
            .closeBtn {
                position: absolute;
                top: 0;
                right: 0;
                transform: translateX(50%) translateY(-50%);
                img {
                    width: 5.4375rem;
                    height: auto;
                }
            }
        }
    }
}
@media screen and (min-width: 539px) {
    .main {
        padding-top: 7.3125rem;
        .note {
            margin-top: 20.75rem;
            padding: 0 6rem;
        }
    }
}
@media screen and (min-width: 1024px) {
    .main {
        height: auto;
        padding-top: 9.3125rem;
        .reserveFrame {
            height: 100vh;
        }
        .note {
            margin-top: 26.75rem;
            padding: 0 6rem;
        }
    }
}
.opa {
    opacity: 0;
}
</style>