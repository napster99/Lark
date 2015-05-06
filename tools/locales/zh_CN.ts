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

module lark {

    global["$locale_strings"] = global["$locale_strings"] || {};
    var locale_strings = global["$locale_strings"];

    locale_strings[10001] = "Compiler option {0} expects an argument";
    locale_strings[10002] = "Unknown Compiler option {0}";
    locale_strings[10003] = "TSC is trying to exit, exit code is: {0}";
    locale_strings[10004] = "No output file name when minify flag is true";
    locale_strings[10005] = "Can not load Lark project properties from lark.json";
    locale_strings[10006] = "manifest.json 生成成功";
    locale_strings[10007] = "{0}: error 类文件之间存在循环依赖，请检查类的继承关系或静态变量的初始化引用。";
    locale_strings[10008] = "类或接口名冲突：‘{0}’同时存在于以下两个文件内：\n{1}\n{2}";
    locale_strings[11001] = "{0}: error 找不到EXML文件";
    locale_strings[11002] = "{0}: error 不是有效的XML文件";
    locale_strings[11003] = "{0}: error 无法找到节点所对应的类定义\n{1}";
    locale_strings[11004] = "{0}: error 节点不能含有同名的id属性\n{1}";
    locale_strings[11005] = "{0}: error 节点上不存在名为'{1}'的属性或样式名:\n{2}";
    locale_strings[11006] = "{0}: error 未定义的视图状态名称:'{1}'\n{2}";
    locale_strings[11007] = "{0}: error 只有处于容器内的egret.IVisualElement对象可以使用includeIn和excludeFrom属性\n{1}";
    locale_strings[11008] = "{0}: error 无法将'{1}'类型的值赋给属性:'{2}'\n{3}";
    locale_strings[11009] = "{0}: error 在节点属性值的‘{}’标签内只能引用一个ID，不允许使用复杂表达式\n{1}";
    locale_strings[11010] = "{0}: error 属性:'{1}'所引用的ID: '{2}'不存在\n{3}";
    locale_strings[11011] = "{0}: error 无法将多个子节点赋值给同一个属性:'{1}'\n{2}";
    locale_strings[11012] = "{0}: error 节点上不存在默认属性，必须显式声明子节点要赋值到的属性名\n{1}";
    locale_strings[11013] = "{0}: error 类型为Array的属性节点上不允许使用视图状态语法\n{1}";
    locale_strings[11014] = "{0}: error 不允许将皮肤类自身赋值给节点属性\n{1}";
    locale_strings[11015] = "{0}: error 节点引用的类定义:{1}不存在\n{2}";
    locale_strings[11016] = "{0}: error 节点上'scale9Grid'属性值的格式错误:{1}";
    locale_strings[11017] = "{0}: error 节点上缺少命名空间前缀:{1}";
    locale_strings[11018] = "{0}: error 节点上'skinName'属性值的格式错误:{1}";
    locale_strings[11019] = "{0}: error 容器的子项必须是可视节点:{1}";
    locale_strings[11101] = "{0}: warning 在w:Declarations内的子节点，不允许使用includeIn和excludeFrom属性\n{1}";
    locale_strings[11102] = "{0}: warning 在属性节点上找不到任何子节点\n{1}";
    locale_strings[11103] = "{0}: warning 节点上的同一个属性'{1}'被多次赋值\n{2}";
}