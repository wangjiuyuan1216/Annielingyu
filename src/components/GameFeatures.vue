<template>
    <div class="box">
        <div class="game">
            <div class="redWrap">
                <img :src="require('@/assets/images/' + abc + '/features.png')" />
            </div>
            <div class="swiperWrap">
                <div style="position: relative">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    <swiper :options="swiperOption" ref="mySwiper" class="swiper-container swiper">
                        <swiper-slide>
                            <img src="@/assets/images/1@2x.png" />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/images/3@2x.png" />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/images/2@2x.png" />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/images/7@2x.png" />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/images/4@2x.png" />
                        </swiper-slide>
                        <!-- <swiper-slide>
                            <img src="@/assets/images/7@2x.png" />
                        </swiper-slide> -->

                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
                <div class="gift" @click="handleGift">
                    <img :src="require('@/assets/images/' + abc + '/gift.png')" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { lang } from '@/tool/lang'
import { myHTTP } from '@/utils/net'

export default {
    components: { swiper, swiperSlide },
    props: ['language'],
    data() {
        return {
            abc: '',
            title: '',
            swiperOption: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets'
                },
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 80,
                    stretch: 1,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }
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
                    document.getElementsByClassName('box')[0].style.height = '160vw'
                }
            },
            false
        )

        this.abc = this.language
        this.title = lang[6][this.language]
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    methods: {
        handleGift() {
            document.documentElement.scrollTop = 0
        }
    }
}
</script>


<style scoped lang="less">
.box {
    background: url('~@/assets/images/bg2.png') no-repeat;
    background-size: 100% 100%;
}
.game {
    .gift {
        margin-top: 1.25rem;
        img {
            height: 6rem;
        }
    }
    div:focus {
        outline: none;
    }
    height: 100vh;
    width: 100%;
    // background: url('~@/assets/images/bg2.png') no-repeat;
    padding-top: 5.125rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    font-weight: 600;
    .redWrap {
        font-size: 2.75rem;
        padding: 0 7.5rem;
        margin-bottom: 3.125rem;
        img {
            width: 100%;
        }
        // span {
        //     display: inline-block;
        //     background: url('~@/assets/images/red_bg.png') no-repeat;
        //     background-size: 100% 100%;
        //     width: 100%;
        //     padding: 0.6875rem 0 2.625rem;
        //     text-shadow: 0 0 0.25rem #5f151b;
        //     // -webkit-text-stroke: .25rem #5F151B;
        // }
    }
    .swiperWrap {
        position: relative;
        flex: 1;
        /deep/.swiper-container {
            width: 100%;
            padding: 3.125rem 0;
            position: relative;
        }
        /deep/.swiper-slide {
            background-position: center;
            background-size: cover;
            width: 31.25rem;
            // height: 41.75rem;
            max-width: 500px;
            // max-height: 668px;
            margin-bottom: 1.5rem;
            img {
                width: 100%;
                height: 100%;
            }
        }
        /deep/.swiper-pagination-bullet-active {
            background: #ffc600;
        }
        /deep/.swiper-button-prev {
            background-image: url('~@/assets/images/left.png');
            // top: 40%;
            margin-left: 1.875rem;
            z-index: 7;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        /deep/.swiper-button-prev :focus {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        /deep/.swiper-button-next {
            background-image: url('~@/assets/images/left.png');
            // top: 40%;
            transform: rotateY(180deg);
            margin-right: 1.875rem;
            z-index: 7;
        }
        /deep/.swiper-pagination-bullet {
            width: 1.5rem;
            height: 1.5rem;
            margin: 0 0.8rem;
        }
    }
}
@media screen and (min-width: 539px) {
    .game {
        padding-top: 3rem;
        .redWrap {
            font-size: 1.75rem;
            padding: 0 3.25rem;
            // span {
            //     display: inline-block;
            //     background: url('~@/assets/images/red_bg.png') no-repeat;
            //     background-size: 100% 100%;
            //     width: 100%;
            //     padding: 0.6875rem 0 2.25rem;
            // }
        }
        .swiperWrap {
            /deep/.swiper-container {
                padding: 3rem 0;
            }
            // /deep/.swiper-slide {
            //     width: 24.25rem;
            //     height: 32.75rem;
            // }
            /deep/.swiper-button-prev {
                margin-left: 7.875rem;
            }
            /deep/.swiper-button-next {
                margin-right: 7.875rem;
            }
        }
    }
}
@media screen and (min-width: 767px) {
    .game {
        /deep/.swiper-container {
            padding: 0;
        }
        .swiperWrap {
            /deep/.swiper-slide {
                width: 24.25rem;
                // height: 41.75rem;
                max-width: 500px;
                max-height: 668px;
            }
            /deep/.swiper-button-prev {
                margin-left: 8.875rem;
            }
            /deep/.swiper-button-next {
                margin-right: 8.875rem;
            }
        }
    }
}
@media screen and (min-width: 1023px) {
    .game {
        // height: auto;
        /deep/.swiper-container {
            padding: 0;
        }
        .swiperWrap {
            /deep/.swiper-slide {
                // width: 26.25rem;
                height: 44.75rem;
                max-width: 500px;
                max-height: 768px;
            }
            /deep/.swiper-button-prev {
                margin-left: 11.875rem;
            }
            /deep/.swiper-button-next {
                margin-right: 11.875rem;
            }
        }
    }
}
@media screen and (min-width: 1025px) {
    .game {
        height: auto;
        padding-bottom: 300px;
        .swiperWrap {
            //             /deep/.swiper-slide {
            //                 width: 31.25rem;
            //                 height: 41.75rem;
            //                 max-width: 500px;
            //                 max-height: 668px;
            // }
            /deep/.swiper-button-prev {
                margin-left: 12.875rem;
            }
            /deep/.swiper-button-next {
                margin-right: 12.875rem;
            }
        }
    }
}
</style>