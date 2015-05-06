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


module lark.player {
    /**
     * 显示对象失效标志
     */
    export const enum DisplayObjectFlags {

        //DisplayObject剩余可用的：

        /**
         * 显示对象是否开启像素级精确碰撞，开启后显示对象的透明区域将可以穿透，Graphics默认开启此功能，。
         */
        PixelHitTest = 0x0001,
        /**
         * 显示对象自身的绘制区域尺寸失效
         */
        InvalidContentBounds = 0x0002,

        /**
         * 显示对象的矩形区域尺寸失效，包括自身绘制区域和子项的区域集合
         */
        InvalidBounds = 0x0004,

        /**
         * 显示对象的matrix属性失效标志，通常因为scaleX，width等属性发生改变。
         */
        InvalidMatrix = 0x0008,

        /**
         * 显示对象祖代的矩阵失效。
         */
        InvalidConcatenatedMatrix = 0x0010,

        /**
         * 显示对象祖代的逆矩阵失效。
         */
        InvalidInvertedConcatenatedMatrix = 0x0020,

        /**
         * 显示对象祖代的透明度属性失效。
         */
        InvalidConcatenatedAlpha = 0x0040,
        /**
         * 显示对象应该被缓存成位图的标志，即使没有设置这个标志，也有可能被缓存成位图，例如含有滤镜的情况。
         * 而当设置了这个标志，如果内存不足，也会放弃缓存。
         */
        CacheAsBitmap = 0x0080,

        /**
         * 显示对象自身需要重绘的标志
         */
        DirtyRender = 0x0100,
        /**
         * 子项中已经全部含有DirtyRender标志，无需继续遍历。
         */
        DirtyChildren = 0x200,
        /**
         * 对象自身在舞台上的显示尺寸发生改变。
         */
        TouchEnabled = 0x400,
        /**
         * 对象自身以及子项在舞台上显示尺寸发生改变。
         */
        TouchChildren = 0x800,
        /**
         * DirtyRender|DirtyChildren
         */
        Dirty = DirtyRender | DirtyChildren,
        /**
         * 添加或删除子项时，需要向子项传递的标志。
         */
        DownOnAddedOrRemoved = DisplayObjectFlags.InvalidConcatenatedMatrix |
            DisplayObjectFlags.InvalidInvertedConcatenatedMatrix |
            DisplayObjectFlags.InvalidConcatenatedAlpha |
            DisplayObjectFlags.DirtyChildren,
        /**
         * 显示对象初始化时的标志量
         */
        InitFlags = DisplayObjectFlags.TouchEnabled |
            DisplayObjectFlags.TouchChildren |
            DisplayObjectFlags.InvalidConcatenatedMatrix |
            DisplayObjectFlags.InvalidInvertedConcatenatedMatrix |
            DisplayObjectFlags.InvalidConcatenatedAlpha |
            DisplayObjectFlags.Dirty

    }


    export const enum TextFieldFlags {
        // TextFiled剩余可用:
        /**
         * 是否显示为粗体。false
         */
        Bold = 0x1000,
        /**
         * 是否显示为斜体。false
         */
        Italic = 0x2000,
        /**
         * 字体信息的字符串形式发生改变。true
         */
        FontStringChanged = 0x4000,
        /**
         * 文本行列表发生改变
         */
        TextLinesChanged = 0x8000,
        /**
         * 一个布尔值，表示文本字段是否自动换行。如果 wordWrap 的值为 true，则该文本字段自动换行；如果值为 false，则该文本字段不自动换行。默认值为 false。
         */
        wordWrap = 0x10000
    }



}