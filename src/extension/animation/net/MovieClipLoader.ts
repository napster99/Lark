//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

module larkAnimation {
    /**
     * @language en_US
     * The Loader class is used to load MovieClip config files. Use the load() method to initiate loading.
     * The loaded MovieClip object is in the data property of MovieClipLoader.
     * @see lark.HttpRequest
     * @version Lark 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * MovieClipLoader 类可用于加载MovieClip配置文件。使用 load() 方法来启动加载。被加载的MovieClip对象数据将存储在 MovieClipLoader.data 属性上 。
     * @see lark.HttpRequest
     * @version Lark 1.0
     * @platform Web,Native
     */
    export class BitmapArrayLoader extends lark.EventEmitter {

        /**
         * @private
         * MovieClip的配置文件，比如Egret MovieClip的.json配置文件
         */
        $config:string;

        /**
         * @language en_US
         * Specifies whether or not cross-site Access-Control requests should be made when loading a MovieClip from foreign origins.<br/>
         * possible values are:"anonymous","use-credentials" or null.
         * @default null
         * @version Lark 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 当从其他站点加载一个MovieClip时，指定是否启用跨域资源共享(CORS)，默认值为null。<br/>
         * 可以设置为"anonymous","use-credentials"或null,设置为其他值将等同于"anonymous"。
         * @version Lark 1.0
         * @platform Web,Native
         */
        public  crossOrigin:string;

        /**
         * @private
         * 当前要加载的URL
         */
        $currentURL;

        /**
         * @private
         */
        $data:BitmapArray;

        /**
         * @language en_US
         * The data received from the load operation.
         * @default null
         * @version Lark 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 使用 load() 方法加载成功的 MovieClip 对象。
         * @default null
         * @version Lark 1.0
         * @platform Web,Native
         */
        public  get data():BitmapArray {
            return this.$data;
        }

        /**
         * @language en_US
         * start a load operation。<br/>
         * Note: Calling this method for an already active request (one for which load() has already been
         * called) will abort the last load operation immediately.
         * @param type The type of the MovieClip.It's defined by MovieClipType.
         * @param url The web address of the MovieClip config to load。
         * @see lark.MovieClipType
         * @version Lark 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 启动一次MovieClip加载。<br/>
         * 注意：若之前已经调用过加载请求，重新调用 load() 将终止先前的请求，并开始新的加载。
         * @param type 要加在的动画类型。类型由MovieClipType定义。
         * @param url 要加载的MovieClip配置文件的地址。
         * @see lark.MovieClipType
         * @version Lark 1.0
         * @platform Web,Native
         */
        public load(url:string):void {
            var request:lark.HttpRequest = new lark.HttpRequest();
            request.once(lark.Event.COMPLETE, this.onConfigLoad, this);
            request.once(lark.Event.IO_ERROR, this.onIOError, this);
            request.open(url, lark.HttpMethod.GET);
            request.send();
            this.$currentURL = url;
        }

        $loadList:Array<any>;

        /**
         * @private
         * 加载配置文件完毕
         */
        private onConfigLoad(event:lark.Event):void {
            var request:lark.HttpRequest = event.currentTarget;
            this.$config = request.response;
            this.$loadList = [];

            var arr = this.$currentURL.split("?");
            var arr2 = arr[0].split("/");
            arr2[arr2.length - 1] = arr2[arr2.length - 1].split(".")[0] + ".png";
            var url = "";
            for (var i = 0; i < arr2.length; i++) {
                url += arr2[i] + (i < arr2.length - 1 ? "/" : "");
            }
            if (arr.length == 2) url += arr[2];

            this.$loadList.push({"url": url, "content": null});

            this.startLoadList();
        }

        /**
         * @private
         * 加载资源列表
         */
        private startLoadList():void {
            var url:string;
            var len = this.$loadList.length;
            for (var i = 0; i < len; i++) {
                if (this.$loadList[i].content == null) {
                    url = this.$loadList[i].url;
                    break;
                }
            }
            var imageLoader:lark.ImageLoader = new lark.ImageLoader;
            imageLoader.once(lark.Event.COMPLETE, this.onLoadList, this);
            imageLoader.load(url);
        }

        /**
         * @private
         * 加载资源完毕
         * @param event
         */
        private onLoadList(event:lark.Event):void {
            var flag = true;
            var len:number = this.$loadList.length;
            for (var i:number = 0; i < len; i++) {
                if (this.$loadList[i].content == null) {
                    this.$loadList[i].content = event.currentTarget.data;
                    if (i == len - 1) flag = false;
                    break;
                }
            }
            //全部资源加载完毕
            if (flag == false) {
                var info = JSON.parse(this.$config);
                var list:Array<any>;
                for (var key in info.mc) {
                    list = info.mc[key].frames;
                    break;
                }
                var len = list.length;
                var res;
                var frames:Array<BitmapArrayFrameData> = [];
                for (var i = 0; i < len; i++) {
                    res = info.res[list[i].res];
                    frames.push(new BitmapArrayFrameData(this.$loadList[0].content, list[i].x, list[i].y, res.w, res.h, res.x, res.y));
                }
                var frameMovieClip = new larkAnimation.BitmapArray();
                frameMovieClip.$setFrames(frames);
                this.$data = frameMovieClip;
                this.$loadList = null;
                this.emitWith(lark.Event.COMPLETE);
            }
            else {
                this.startLoadList();
            }
        }

        /**
         * @private
         */
        private onIOError(event:lark.Event):void {
            if (DEBUG && !this.hasListener(lark.Event.IO_ERROR)) {
                lark.$error(1011, this.$currentURL);
            }
            this.emitWith(lark.Event.IO_ERROR);
        }
    }
}