


<style>
/*@import "~assets/font/iconfont.css";*/


/*.flashsale_header {
    height: 50px;
    display: flex;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    background-color: #ffffff;
}*/

.flashsale_header .tinct {
    flex: 1;
    font-size: 28px;
}

.flashsale_header .Sale {
    flex: 9;
}

.superior {
    margin-right: 4px;
}

.yd-cell {
    background-color: #f5f5f5;
}

.yd-cell-title:after {

    border-bottom: none;
}

.yd-cell:after {

    border-bottom: none;
}

.yd-cell-right {

    padding-right: 0px;
}

.upload_warp_img_div_del {
    position: absolute;
    top: 6px;
    width: 16px;
    right: 4px;
}

.upload_warp_img_div_top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 30px;
    /* background-color: rgba(0, 0, 0, 0.4); */
    line-height: 30px;
    text-align: left;
    color: #fff;
    font-size: 12px;
    text-indent: 4px;
}

.upload_warp_img_div_text {
    white-space: nowrap;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
}

.upload_warp_img_div img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
}

.upload_warp_img_div {
    position: relative;
    height: 70px;
    width: 70px;
    /* border: 1px solid #ccc; */
    /* margin: 0px 30px 10px 0px; */
    float: left;
    margin-left: 5px;
    margin-top: 5px;
    display: table-cell;
    text-align: center;
    background-color: #eee;
    cursor: pointer;
}

.upload_warp_img {
    /* border-top: 1px solid #D2D2D2; */
    display: inline-block;
    overflow: hidden
}

.upload_warp_text {
    text-align: left;
    margin-bottom: 10px;
    padding-top: 10px;
    text-indent: 14px;
    border-top: 1px solid #ccc;
    font-size: 14px;
}

.upload_warp_right {
    float: left;
    width: 57%;
    margin-left: 2%;
    height: 100%;
    border: 1px dashed #999;
    border-radius: 4px;
    line-height: 130px;
    color: #999;
}

.upload_warp_left img {
    /* margin-top: 32px; */
}

.upload_warp_left {
    position: relative;
    width: 74px;
    height: 74px;
    display: inline-block;
    border-radius: 4px;
    cursor: pointer;
}

.upload_warp {
    /* margin: 14px; */
}

.upload {
    /* border: 1px solid #ccc; */
    /* background-color: #fff; */
    width: 100%;
    /* box-shadow: 0px 1px 0px #ccc; */
    /* border-radius: 4px; */
}


























.hello {
    width: 100%;
    padding-right: 14px;
}
</style>


<template>
    <div>

        <!-- 建议 -->
        <yd-cell-group title="Questions and Suggestion" style="padding: 14px 14px 0px 14px;font-size: 14px;color: #96989e;border-top: 1px solid #dcdde0;">
            <yd-cell-item style="border-radius: 10px; border: 1px solid #dcdde0;    padding: 0px 10px;background-color: #fff;">
                <yd-textarea :show-counter="false" v-model="input1" slot="right" placeholder="Please enter your feedback" maxlength="521" style="    border-radius: 10px;    height: 150px;"></yd-textarea>
            </yd-cell-item>
        </yd-cell-group>
        <!-- 上传图片 -->
        <yd-flexbox direction="vertical" style="    padding-left: 14px;">
            <yd-flexbox-item style="    font-size: 14px;">Add images (Optional)</yd-flexbox-item>
            <yd-flexbox-item>
                <div class="hello">
                    <div class="upload">
                        <div class="upload_warp">
                            <form method="post" id="imgForm" action="/bigmkoss/putObject" enctype="multipart/form-data">
                                <div class="upload_warp_img" v-show="imgList.length!=0">
                                    <div class="upload_warp_img_div" v-for="(item,index) of imgList">
                                        <div class="upload_warp_img_div_top">
                                            <!-- <div class="upload_warp_img_div_text">
                                                                                                                                    {{item.file.name}}
                                                                                                                                </div> -->
                                            <img src="../../assets/images/not_refactoring/img_icon_delete_default.png" class="upload_warp_img_div_del" @click="fileDel(index)">
                                        </div>
                                        <img :src="item.file.src" style="width: 70px;height: 70px;">
                                    </div>
                                </div>
                                <div class="upload_warp_left">
                                    <img src="../../assets/images/not_refactoring/uploadproduct_icon_addimg_default.png" id="list">
                                    <input @change="fileChange($event)" type="file" id="imgUpFile" style="width:74px;height:74px;position: absolute;top: 0;opacity: 0;">
                                </div>

                                <!-- <div class="upload_warp_right" @drop="drop($event)" @dragenter="dragenter($event)" @dragover="dragover($event)">
                                                                                                                                        或者将文件拖到此处
                                                                                                                                    </div> -->

                                <!-- <input @click="uploadings()" value="提交"> -->
                            </form>
                        </div>
                        <!-- <div class="upload_warp_text">
                                                                                                                                    选中{{imgList.length}}张文件，共{{bytesToSize(this.size)}}
                                                                                                                                </div> -->
                        <yd-button size="large" color="#FFF" @click="uploadings()" style="background: linear-gradient(to right, #ff8b33, #ff6f33)">Submit</yd-button>
                    </div>
                </div>
            </yd-flexbox-item>

        </yd-flexbox>
    </div>
</template>

<script type="text/babel">
import { api } from '@/utils/api/apis.js'//这个是访问数据页面的api
import service from '@/utils/fetch.js'//这是一个封装好的请求方法axios
import qs from 'qs'
import querystring from 'querystring'
export default {
    data() {
        return {
            isShow: false,
            imgList: [],
            size: 0,
            input1: '',
            images: '',
            drawing: [],
            posp: [],
            address: '',
            user_id: user_id,
        }
    },
    watch: {
        imgList() {
        }
    }, created() {
        if (user_id == null) {
            window.location.href = 'login.html'
        }

    },
    methods: {

        uploadings() {
            var imgtu = this.posp.join(',')
            axios.post("/usercenter/commit_suggestion?web_access=web", {
                user_id: user_id,
                type: 1,
                content: this.input1,
                images: imgtu,
            }).then(res => {
                if (res.data.error_code == '10003' || res.data.error_code == '10004') {
                    this.$dialog.toast({
                        mes: res.data.error,
                        timeout: 1500
                    });
                }
                if (res.data.success == true) {
                    this.$dialog.toast({
                        mes: 'Submit success, Thank you for your feedback!',
                        timeout: 1500
                    });
                    setTimeout(() => {
                        window.history.back()
                    }, 1000);
                }

            });
        },
        toggle() {
            this.isShow = !this.isShow;
            $(function() {
                $(document).bind("click", function(e) {
                    var target = $(e.target);
                    if (target.closest(".pop").length == 0) {
                        $(".pop").hide();
                    }
                })
            })
        },
        fileClick() {
            document.getElementById('upload_file').click()
        },
        fileChange(el) {
            if (this.imgList.length < 5) {
                setTimeout(() => {
                    var imgs = ''
                    this.imgList.forEach(function(item) {
                        imgs = item.file.src
                    })
                    var param = qs.stringify({ images64: imgs });
                    service.post(api.contract + 'api/v1/common/uploadImage', param).then(res => {
                        if (res.data.code == '200') {
                            this.drawing = res.data.data.url
                            this.posp.push(this.drawing)
                        }

                    })

                }, 1000)
            } else {
                this.$dialog.toast({
                    mes: 'You can only add up to 5 images',
                    timeout: 1500
                });
            }
            ;

            if (!el.target.files[0].size) return;
            this.fileList(el.target.files);
            el.target.value = ''
        },
        fileList(files) {
            for (let i = 0; i < files.length; i++) {
                this.fileAdd(files[i]);
            }

        },
        fileAdd(file) {
            this.images = file.src
            this.size = this.size + file.size;//总大小
            let reader = new FileReader();
            reader.vue = this;
            reader.readAsDataURL(file);
            reader.onload = function() {
                file.src = this.result;
                if (this.vue.imgList.length < 5) {
                    this.vue.imgList.push({
                        file
                    });
                }


            }

        },
        fileDel(index) {
            this.size = this.size - this.imgList[index].file.size;//总大小
            this.imgList.splice(index, 1);

        },
        bytesToSize(bytes) {
            if (bytes === 0) return '0 B';
            let k = 1000, // or 1024
                sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                i = Math.floor(Math.log(bytes) / Math.log(k));
            return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
        },
        dragenter(el) {
            el.stopPropagation();
            el.preventDefault();
        },
        dragover(el) {
            el.stopPropagation();
            el.preventDefault();
        },
        drop(el) {
            el.stopPropagation();
            el.preventDefault();
            this.fileList(el.dataTransfer.files);
        }
    }
}
</script>
