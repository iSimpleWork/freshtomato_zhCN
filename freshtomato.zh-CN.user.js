// ==UserScript==
// @name      Tomato by Neil 简体中文版
// @namespace      https://userscripts-mirror.org/users/x
// @homepage      https://userscripts-mirror.org/users/x
// @description   此脚本基于 Shibby 的繁体版改造而来，感谢他的共享。 
// @include      http://192.168.1.1/*
// @include      https://192.168.1.1/*
// @include      http://192.168.2.1/*
// @include      https://192.168.2.1/*
// @copyright    iSampleWork, ken670128
// @version      0.1.100
// @downloadURL      https://userscripts-mirror.org/scripts/source/x.user.js
// @updateURL      https://userscripts-mirror.org/scripts/source/x.meta.js
// @icon      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACxZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDQuMi4yLWMwNjMgNTMuMzUyNjI0LCAyMDA4LzA3LzMwLTE4OjEyOjE4ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzQgV2luZG93cyIKICAgeG1wOkNyZWF0ZURhdGU9IjIwMTAtMDUtMjBUMTU6MDQ6MzQtMDc6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDEwLTA1LTIwVDE1OjA0OjM0LTA3OjAwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDEwLTA1LTIwVDE1OjA0OjM0LTA3OjAwIgogICBkYzpmb3JtYXQ9ImFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIvPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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
// ==/UserScript==


/*	
2024/12/28 v0.1.100
此脚本在Shibby繁体版基础上改造而来
此脚本旨在提供中文版的FreshTomato中文版插件
Shibby：https://userscripts-mirror.org/scripts/source/422411.user.js

2014/04/03 v0.8.115
此脚本在 Shibby 的 Tomato v115 的环境下所撰写,理论上未来版本也可适用。
此脚本主要在使用 Asus RT-N12 的环境下所撰写,有些项目可能会因 RT-N12 未支援而没翻到。
此脚本主要以 Shibby 的 Tomato v115 Max 版本来翻译,使用其它版本也可使用,仅会有些地方没中文化。
翻译完成的部份,目前有些地方还未能中文化,目前已不打算研究解决,因为那仅有一小部份。
翻译完成的部份若有不适当的译词或是漏翻的部份,欢迎提供建议及回报。
翻译的译词大都参考数位天堂 Aven 所中文化的 Tomato Shibby 中文版韧体。
数位天堂 : http://digiland.tw/
替代文字代码从 JoeSimmons 所写的 Replace Text On Webpages 所改写。
JoeSimmons : https://userscripts-mirror.org/users/23652
*/


	// Tomato 界面中文化
	// ===============================================================
	var TomatoPage = window.location.pathname.replace(/\//g,"");
	Tomato_Gui = document.getElementsByClassName('title');
	Tomato_Gui[0].innerHTML = '新鲜蕃茄 (FreshTomato)';

	Tomato_Gui = document.getElementsByClassName('version');
	Tomato_Gui[0].innerHTML = "Neil's Tomato 油猴简体中文版 v0.1.100";
	


	// Tomato 选单中文化
	// ===============================================================
	Tomato_Menu = document.getElementsByClassName('indent1');
		for (var i = 0 ; Tomato_Menu.length > i ; i++) {
			switch(Tomato_Menu[i].innerHTML) {
				case 'Status':
					Tomato_Menu[i].innerHTML = '系统状态';
					break;
				case 'Bandwidth':	
					Tomato_Menu[i].innerHTML = '带宽监控';
					break;
				case 'IP Traffic':
					Tomato_Menu[i].innerHTML = 'IP 流量监控';
					break;
				case 'Tools':
					Tomato_Menu[i].innerHTML = '诊断工具';
					break;
				case 'Basic':
					Tomato_Menu[i].innerHTML = '基本设置';
					break;
				case 'Advanced':
					Tomato_Menu[i].innerHTML = '高级设置';
					break;
				case 'Port Forwarding':
					Tomato_Menu[i].innerHTML = '端口转发';
					break;
				case 'Access Restriction':
					Tomato_Menu[i].innerHTML = '访问控制';
					break;
				case 'QoS':
					Tomato_Menu[i].innerHTML = '网络质量管理';
					break;
				case 'Bandwidth Limiter':
					Tomato_Menu[i].innerHTML = '带宽限制';
					break;
				case 'Captive Portal':
					Tomato_Menu[i].innerHTML = '网页认证';
					break;
				case 'VPN Tunneling':
					Tomato_Menu[i].innerHTML = 'VPN 通道';
					break;
				case 'Administration':
					Tomato_Menu[i].innerHTML = '路由器管理';
					break;
				case 'About':
					Tomato_Menu[i].innerHTML = '关于';
					break;
				case 'Reboot...':
					Tomato_Menu[i].innerHTML = '重新开机...';
					break;
				case 'Shutdown...':
					Tomato_Menu[i].innerHTML = '关机...';
					break;
				case 'Logout':
					Tomato_Menu[i].innerHTML = '退出';
					break;
			}
		}

	
	Tomato_Menu = document.getElementsByClassName('indent2');
		for (var i = 0 ; Tomato_Menu.length > i ; i++) {
			switch(Tomato_Menu[i].innerHTML) {
				case 'Overview':
					Tomato_Menu[i].innerHTML = '系统信息';
					break;
				case 'Device List':
					Tomato_Menu[i].innerHTML = '设备列表';
					break;
				case 'Web Usage':
					Tomato_Menu[i].innerHTML = '网站浏览记录';
					break;
				case 'Logs':
					Tomato_Menu[i].innerHTML = '系统日志';
					break;
				case 'Real-Time':
					Tomato_Menu[i].innerHTML = '实时流量';
					break;
				case 'Last 24 Hours':
					Tomato_Menu[i].innerHTML = '24小时内流量';
					break;
				case 'Daily':
					Tomato_Menu[i].innerHTML = '每日流量';
					break;
				case 'Weekly':
					Tomato_Menu[i].innerHTML = '每周流量';
					break;
				case 'Monthly':
					Tomato_Menu[i].innerHTML = '每月流量';
					break;
				case 'View Graphs':
					Tomato_Menu[i].innerHTML = '图表分析';
					break;
				case 'Transfer Rates':
					Tomato_Menu[i].innerHTML = '传输速率';
					break;
				case 'Trace':
					Tomato_Menu[i].innerHTML = '路由追踪';
					break;
				case 'System Commands':
					Tomato_Menu[i].innerHTML = '系统指令';
					break;
				case 'Wireless Survey':
					Tomato_Menu[i].innerHTML = '无线搜索';
					break;
				case 'WOL':
					Tomato_Menu[i].innerHTML = '网络唤醒';
					break;
				case 'Network':
					Tomato_Menu[i].innerHTML = '网络连接';
					break;
				case 'IPv6':
					Tomato_Menu[i].innerHTML = 'IPv6 设置';
					break;
				case 'Identification':
					Tomato_Menu[i].innerHTML = '基本资料';
					break;
				case 'Time':
					Tomato_Menu[i].innerHTML = '国际时间';
					break;
				case 'DDNS':
					Tomato_Menu[i].innerHTML = '动态 DNS';
					break;
				case 'Static DHCP/ARP/IPT':
					Tomato_Menu[i].innerHTML = '静态 DHCP/ARP/IPT';
					break;
				case 'Wireless Filter':
					Tomato_Menu[i].innerHTML = '无线过滤';
					break;
				case 'Conntrack/Netfilter':
					Tomato_Menu[i].innerHTML = '连接追踪/过滤';
					break;
				case 'DHCP/DNS':
					Tomato_Menu[i].innerHTML = 'DHCP/DNS 设置';
					break;
				case 'Firewall':
					Tomato_Menu[i].innerHTML = '防火墙';
					break;
				case 'MAC Address':
					Tomato_Menu[i].innerHTML = 'MAC 地址';
					break;
				case 'Miscellaneous':
					Tomato_Menu[i].innerHTML = '其他设置';
					break;
				case 'Routing':
					Tomato_Menu[i].innerHTML = '路由表';
					break;
				case 'TOR Project':
					Tomato_Menu[i].innerHTML = '洋葱路由';
					break;
				case 'VLAN':
					Tomato_Menu[i].innerHTML = '虚拟局域网';
					break;
				case 'LAN Access':
					Tomato_Menu[i].innerHTML = '局域网控制';
					break;
				case 'Virtual Wireless':
					Tomato_Menu[i].innerHTML = '虚拟无线网络';
					break;
				case 'Wireless':
					Tomato_Menu[i].innerHTML = '无线网络';
					break;
				case 'Basic':
					Tomato_Menu[i].innerHTML = '基本设置';
					break;
				case 'Basic IPv6':
					Tomato_Menu[i].innerHTML = 'IPv6 基本设置';
					break;
				case 'DMZ':
					Tomato_Menu[i].innerHTML = 'DMZ	隔离区';
					break;
				case 'Triggered':
					Tomato_Menu[i].innerHTML = '触发式转发';
					break;
				case 'UPnP/NAT-PMP':
					Tomato_Menu[i].innerHTML = '通用即插即用';
					break;
				case 'Basic Settings':
					Tomato_Menu[i].innerHTML = '基本设置';
					break;
				case 'Classification':
					Tomato_Menu[i].innerHTML = '分级管制';
					break;
				case 'View Details':
					Tomato_Menu[i].innerHTML = '查看详情';
					break;
				case 'OpenVPN Server':
					Tomato_Menu[i].innerHTML = 'OpenVPN 服务器';
					break;
				case 'OpenVPN Client':
					Tomato_Menu[i].innerHTML = 'OpenVPN 客户端';
					break;
				case 'PPTP Server':
					Tomato_Menu[i].innerHTML = 'PPTP 服务器';
					break;
				case 'PPTP Online':
					Tomato_Menu[i].innerHTML = 'PPTP 连接状态';
					break;
				case 'PPTP Client':
					Tomato_Menu[i].innerHTML = 'PPTP 客户端';
					break;
				case 'Admin Access':
					Tomato_Menu[i].innerHTML = '管理访问';
					break;
				case 'TomatoAnon':
					Tomato_Menu[i].innerHTML = '匿名回报';
					break;
				case 'Bandwidth Monitoring':
					Tomato_Menu[i].innerHTML = '带宽监控';
					break;
				case 'IP Traffic Monitoring':
					Tomato_Menu[i].innerHTML = 'IP 流量监控';
					break;
				case 'Buttons/LED':
					Tomato_Menu[i].innerHTML = '按键 / LED';
					break;
				case 'CIFS Client':
					Tomato_Menu[i].innerHTML = '网络共享';
					break;
				case 'Configuration':
					Tomato_Menu[i].innerHTML = '路由器设置';
					break;
				case 'Debugging':
					Tomato_Menu[i].innerHTML = '调试';
					break;
				case 'JFFS':
					Tomato_Menu[i].innerHTML = 'JFFS 支援';
					break;
				case 'NFS Server':
					Tomato_Menu[i].innerHTML = 'NFS 服务器';
					break;
				case 'SNMP':
					Tomato_Menu[i].innerHTML = '简易网络管理协定';
					break;
				case 'Logging':
					Tomato_Menu[i].innerHTML = '系统日志';
					break;
				case 'Scheduler':
					Tomato_Menu[i].innerHTML = '定时作业';
					break;
				case 'Scripts':
					Tomato_Menu[i].innerHTML = '系统指令';
					break;
				case 'Upgrade':
					Tomato_Menu[i].innerHTML = '系统升级';
					break;
			}
		}


	// Tomato 系统信息页面
	// ===============================================================
	if (TomatoPage == '') {
		Tomato_Overview = document.getElementsByClassName('section-title');
		for (var i = 0 ; Tomato_Overview.length > i ; i++) {
			switch(Tomato_Overview[i].innerHTML) {
				case '<center>!! Attention !!</center>':
					Tomato_Overview[i].innerHTML = '<center>!! 注意 !!</center>';
					break;
				case 'System':
					Tomato_Overview[i].innerHTML = '系统信息';
					break;
				case 'Ethernet Ports State':
					Tomato_Overview[i].innerHTML = '以太网口状态';
					break;
			}
		}
		
		Tomato_Overview = document.getElementsByClassName('title indent1');
		for (var i = 0 ; Tomato_Overview.length > i ; i++) {
			switch(Tomato_Overview[i].innerHTML) {
				case 'Name':
					Tomato_Overview[i].innerHTML = '名称';
					break;
				case 'Model':
					Tomato_Overview[i].innerHTML = '机型';
					break;
				case 'Chipset':
					Tomato_Overview[i].innerHTML = 'CPU 型号';
					break;
				case 'CPU Freq':
					Tomato_Overview[i].innerHTML = 'CPU 时钟';
					break;
				case 'Flash Size':
					Tomato_Overview[i].innerHTML = 'Flash 容量';
					break;
				case 'Time':
					Tomato_Overview[i].innerHTML = '现在时间';
					break;
				case 'Uptime':
					Tomato_Overview[i].innerHTML = '开机时间';
					break;
				case 'CPU Load <small>(1 / 5 / 15 mins)</small>':
					Tomato_Overview[i].innerHTML = 'CPU 负载 <small>(1/5/15分钟)</small>';
					break;
				case 'Total / Free Memory':
					Tomato_Overview[i].innerHTML = '总计/可用内存';
					break;
				case 'Total / Free NVRAM':
					Tomato_Overview[i].innerHTML = '总计/可用 NVRAM';
					break;
				case 'MAC Address':
					Tomato_Overview[i].innerHTML = 'MAC 地址';
					break;
				case 'Connection Type':
					Tomato_Overview[i].innerHTML = '连接类型';
					break;
				case 'IP Address':
					Tomato_Overview[i].innerHTML = '目前 IP 地址';
					break;
				case 'Previous WAN IP':
					Tomato_Overview[i].innerHTML = '上次 IP 地址';
					break;
				case 'Subnet Mask':
					Tomato_Overview[i].innerHTML = '子网掩码';
					break;
				case 'Gateway':
					Tomato_Overview[i].innerHTML = '网关';
					break;
				case 'DNS':
					Tomato_Overview[i].innerHTML = 'DNS 服务器';
					break;
				case 'MTU':
					Tomato_Overview[i].innerHTML = '最大传输单元 (MTU)';
					break;
				case '系统状态':
					Tomato_Overview[i].innerHTML = '连接状态';
					break;
				case 'Connection Uptime':
					Tomato_Overview[i].innerHTML = '连接状态';
					break;
				case 'Router MAC Address':
					Tomato_Overview[i].innerHTML = '路由器 MAC 地址';
					break;
				case 'Router IP Addresses':
					Tomato_Overview[i].innerHTML = '路由器 IP 地址';
					break;
				case 'DHCP':
					Tomato_Overview[i].innerHTML = 'DHCP 服务器';
					break;
				case 'Wireless Mode':
					Tomato_Overview[i].innerHTML = '无线工作模式';
					break;
				case 'Wireless Network Mode':
					Tomato_Overview[i].innerHTML = '无线网络模式';
					break;
				case 'Interface Status':
					Tomato_Overview[i].innerHTML = '接口状态';
					break;
				case 'Radio':
					Tomato_Overview[i].innerHTML = '无线电波';
					break;
				case 'SSID':
					Tomato_Overview[i].innerHTML = '无线名称 (SSID)';
					break;
				case 'Broadcast':
					Tomato_Overview[i].innerHTML = '广播名称';
					break;
				case 'Security':
					Tomato_Overview[i].innerHTML = '安全性等级';
					break;
				case 'Channel':
					Tomato_Overview[i].innerHTML = '频道';
					break;
				case 'Channel Width':
					Tomato_Overview[i].innerHTML = '带宽';
					break;
				case 'Interference Level':
					Tomato_Overview[i].innerHTML = '干扰程度';
					break;
				case 'Rate':
					Tomato_Overview[i].innerHTML = '速率';
					break;
			}
		}
       
		Tomato_Overview = document.getElementsByTagName('b');
		for (var i = 0 ; Tomato_Overview.length > i ; i++) {
			switch(Tomato_Overview[i].innerHTML) {
				case 'WAN':
					Tomato_Overview[i].innerHTML = '广域网';
					break;
				case 'LAN 1':
					Tomato_Overview[i].innerHTML = '端口1';
					break;
				case 'LAN 2':
					Tomato_Overview[i].innerHTML = '端口2';
					break;
				case 'LAN 3':
					Tomato_Overview[i].innerHTML = '端口3';
					break;
				case 'LAN 4':
					Tomato_Overview[i].innerHTML = '端口4';
					break;
			}
		}

		var words = {
			'Tomato by Shibby':"已有新版的 Shibby's Tomato",
			'is now available.':'可更新。',
			'Click here to read more' : '请点击此处取得更多信息',
			'You did not configure' : '你尚未完成',
			'TomatoAnon project' : 'TomatoAnon 计划',
			'setting.' : '设置。',
			'Please go to' : '请到',
			'TomatoAnon configuration page' : 'TomatoAnon 设置页面',
			'and make a choice.' : '做一个选择以完成设置。',
			'System' : '系统',
			'WAN' : '广域网',
			'LAN' : '区域网',
			'(区域网络)' : '(LAN)',
			'hide' : '隐藏',
			'show' : '显示',
			'Configure' : '设置',
			'100M Full' : '100M 全双工',
			'1000M Full' : '1000M 全双工',
			'Unplugged' : '尚未插入',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
			// 无线网络
			'Access Point + WDS' : '无线访问点 + WDS',
			'Access Point' : '无线访问点',
			'Wireless Client' : '无线用户端 (Client)',
			'Wireless Ethernet Bridge' : '无线网络桥接 (Bridge)',
			'Wireless' : '无线网络',
			'Auto' : '自动',
			'B Only' : '仅 802.11b',
			'G Only' : '仅 802.11g',
			'B/G Mixed' : '802.11b/g 混合',
			'N Only' : '仅 802.11n',
			'WPA Personal' : 'WPA 个人版',
			'WPA Enterprise' : 'WPA 企业版',
			'WPA2 Personal' : 'WPA2 个人版',
			'WPA2 Enterprise' : 'WPA2 企业版',
			'Enabled' : '启用',
			'Disabled' : '停用',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}

	
	// Tomato 连接装置列表页面
	// ===============================================================
	if (TomatoPage == 'status-devices.asp') {
		Tomato_Devices = document.getElementsByClassName('section-title');
		Tomato_Devices[0].innerHTML = '连接设备列表';
		Tomato_Devices = document.getElementsByClassName('co1');
		Tomato_Devices[0].innerHTML = '连接界面';
		Tomato_Devices = document.getElementsByClassName('co2');
		Tomato_Devices[0].innerHTML = 'MAC 地址';
		Tomato_Devices = document.getElementsByClassName('co3');
		Tomato_Devices[0].innerHTML = 'IP 地址';
		Tomato_Devices = document.getElementsByClassName('co4');
		Tomato_Devices[0].innerHTML = '设备名称';
		Tomato_Devices = document.getElementsByClassName('co5');
		Tomato_Devices[0].innerHTML = '信号强度';
		Tomato_Devices = document.getElementsByClassName('co6');
		Tomato_Devices[0].innerHTML = '信号品质';
		Tomato_Devices = document.getElementsByClassName('co7');
		Tomato_Devices[0].innerHTML = '传输速率';
		Tomato_Devices = document.getElementsByClassName('co8');
		Tomato_Devices[0].innerHTML = '剩余租期';
		
		var words = {
			'Noise Floor':'背景杂讯',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}
	
	
	// Tomato 网站浏览记录页面
	// ===============================================================
	if (TomatoPage == 'status-webmon.asp') {
		Tomato_Webmon = document.getElementsByClassName('section-title');
		Tomato_Webmon[0].innerHTML = '最近访问的网站';
		Tomato_Webmon[1].innerHTML = '最近搜索的网站';

		Tomato_Webmon = document.getElementsByClassName('co1');
		for (var i = 0 ; Tomato_Webmon.length > i ; i++) {
			switch(Tomato_Webmon[i].innerHTML) {
				case 'Last Access Time':
					Tomato_Webmon[i].innerHTML = '上次访问时间';
					break;
				case 'Search Time':
					Tomato_Webmon[i].innerHTML = '搜索时间';
					break;
			}
		}
		
		Tomato_Webmon = document.getElementsByClassName('co2');
		for (var i = 0 ; Tomato_Webmon.length > i ; i++) {
			switch(Tomato_Webmon[i].innerHTML) {
				case 'IP Address':
					Tomato_Webmon[i].innerHTML = 'IP 地址';
					break;
			}
		}
		
		Tomato_Webmon = document.getElementsByClassName('co3');
		for (var i = 0 ; Tomato_Webmon.length > i ; i++) {
			switch(Tomato_Webmon[i].innerHTML) {
				case 'Domain Name':
					Tomato_Webmon[i].innerHTML = '域名';
					break;
				case 'Search Criteria':
					Tomato_Webmon[i].innerHTML = '搜索条件';
					break;
			}
		}
		
		var words = {
			'Download':'下载',
			'Clear' : '清除',
			'Show up to' : '显示',
			'All' : '全部',
			'available entries' : '有效记录',
			'Web Monitor Configuration' : '网站监控设置',
			'Web Monitoring disabled.' : '网站监控功能已停用。',
			'Enable' : '启用',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 系统日志页面
	// ===============================================================
	if (TomatoPage == 'status-log.asp') {
		Tomato_Log = document.getElementsByClassName('section-title');
		Tomato_Log[0].innerHTML = '系统日志';
		
		var words = {
			'View Last 25 Lines':'查看最后 25 行',
			'View Last 50 Lines':'查看最后 50 行',
			'View Last 100 Lines':'查看最后 100 行',
			'View All':'查看全部',
			'Download Log File' : '下载日志记录档',
			'Logging Configuration' : '系统日志设置',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}

	
	// Tomato 带宽/IP 流量监控的即时流量/24小时内流量页面
	// ===============================================================
	if (TomatoPage == 'bwm-realtime.asp' || TomatoPage == 'bwm-24.asp' || TomatoPage == 'ipt-realtime.asp' || TomatoPage == 'ipt-24.asp') {
		var words = {
			'RX':'接收',
			'TX':'传送',
			'Avg':'平均值',
			'Peak':'最大值',
			'Total' : '合计',
			'10 minute window, 2 second interval' : '每格2分钟, 每2秒钟取样',
			'Max' : '最大值',
			'Uniform' : '制式化',
			'Per IF' : '依界面',
			'Display' : '显示',
			'Solid' : '实线',
			'Line' : '实线',
			'Color' : '颜色',
			'reverse' : '反置颜色',
			'Configure' : '设置',
			'2 minute interval' : '每2分钟取样',
			'Hours' : '显示时数',
			'10 minute window' : '每格2分钟',
			'2 second interval' : '每2秒钟取样',
			'Per Address' : '依地址',
			'IPs currently on graphic' : '已显示的 IP 地址',
			'Hidden addresses' : '已隐藏的 IP 地址',
			'Select' : '请选择',
			'Click/select a device from this list to hide it' : '点击/选取要隐藏的 IP 地址',
			'Click/select to show it again' : '点击/选取要取消隐藏的 IP 地址',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}

	
	// Tomato 带宽监控的每日/每周/每月流量页面
	// ===============================================================
	if (TomatoPage == 'bwm-daily.asp' || TomatoPage == 'bwm-weekly.asp' || TomatoPage == 'bwm-monthly.asp') {
		Tomato_Bwm = document.getElementsByClassName('section-title');
		switch(TomatoPage) {
			case 'bwm-daily.asp':
				Tomato_Bwm[0].innerHTML = '广域网带宽监控 - 每日流量';
				break;
			case 'bwm-weekly.asp':
				Tomato_Bwm[0].innerHTML = '广域网带宽监控 - 每周流量';
				break;
			case 'bwm-monthly.asp':
				Tomato_Bwm[0].innerHTML = '广域网带宽监控 - 每月流量';
				break;
		}

		var words = {
			'Last 30 Days' : '过去 30 天',
			'Down' : '下载',
			'Up' : '上传',
			'Total' : '合计',
			'Date' : '日期格式',
			'yyyy-mm-dd' : '年-月-日',
			'mm-dd-yyyy' : '月-日-年',
			'mmm dd, yyyy' : '月 日,年',
			'dd.mm.yyyy' : '日.月.年',
			'yyyy-mm' : '年-月',
			'mm-yyyy' : '月-年',
			'mmm yyyy' : '月,年',
			'mm.yyyy' : '月.年',
			'Scale' : '计量单位',
			'Data':'资料',
			'Configure' : '设置',
			'Show' : '显示方式',
			'Summary' : '总和',
			'Full' : '列表',
			'Start' : '每周首日',
			'Sunday' : '周日',
			'Monday' : '周一',
			'Tuesday' : '周二',
			'Wednesday' : '周三',
			'Thursday' : '周四',
			'Friday' : '周五',
			'Saturday' : '周六',
			'Sun' : '日',
			'Mon' : '一',
			'Tue' : '二',
			'Wed' : '三',
			'Thu' : '四',
			'Fri' : '五',
			'Sat' : '六',
			'Jan' : '一月',
			'Feb' : '二月',
			'Mar' : '三月',
			'Apr' : '四月',
			'May' : '五月',
			'Jun' : '六月',
			'Jul' : '七月',
			'Aug' : '八月',
			'Sep' : '九月',
			'Oct' : '十月',
			'Nov' : '十一月',
			'Dec' : '十二月',
			' to ' : ' 到 ',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(ReplaceBwm, 200);
	}
	
	
	// Tomato IP 流量监控的图表分析页面
	// ===============================================================
	if (TomatoPage == 'ipt-graphs.asp') {
		Tomato_IptGraphs = document.getElementsByClassName('section-title');
		Tomato_IptGraphs[0].innerHTML = '连接分布图 (TCP/UDP)';
		Tomato_IptGraphs[1].innerHTML = '带宽分布图 (下载)';
		Tomato_IptGraphs[2].innerHTML = '带宽分布图 (上传)';
		
		Tomato_IptGraphs = document.getElementsByClassName('total');
		for (var i = 0 ; Tomato_IptGraphs.length > i ; i++) {
			switch(Tomato_IptGraphs[i].innerHTML) {
				case 'Total':
					Tomato_IptGraphs[i].innerHTML = '合计';
					break;
			}
		}
		
		var words = {
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato IP 流量监控的传输速率页面
	// ===============================================================
	if (TomatoPage == 'ipt-details.asp') {
		Tomato_IptDetails = document.getElementsByClassName('section-title');
		Tomato_IptDetails[0].innerHTML = 'IP 流量监控信息';
		
		var words = {
			'Options' : '选项',
			'Click here to hide' : '隐藏细节',
			'Click here to show' : '显示细节',
			'Only these IPs' : '显示这些 IP 地址',
			'Exclude these IPs' : '排除这些 IP 地址',
			'Scale' : '单位',
			'Ignore inactive hosts' : '忽略停止传输的主机',
			'Show hostnames' : '显示主机名称',
			'Show shortcuts' : '显示功能快捷',
			'Comma separated list' : '请以逗号分隔 IP 地址',
			'Configure' : '设置',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(ReplaceIpt, 200);
		setTimeout(RefreshPage, 200);
	}
	
	
	// Tomato IP 流量监控的每日/每月流量页面
	// ===============================================================
	if (TomatoPage == 'ipt-daily.asp' || TomatoPage == 'ipt-monthly.asp') {
		Tomato_Ipt = document.getElementsByClassName('section-title');
		switch(TomatoPage) {
			case 'ipt-daily.asp':
				Tomato_Ipt[0].innerHTML = '每日 IP 流量统计';
				break;
			case 'ipt-monthly.asp':
				Tomato_Ipt[0].innerHTML = '每月 IP 流量统计';
				break;
		}
		
		var words = {
			'Options' : '选项',
			'Click here to hide' : '隐藏细节',
			'Click here to show' : '显示细节',
			'List only these IPs' : '显示这些 IP 地址',
			'Exclude these IPs' : '排除这些 IP 地址',
			'Date Range' : '日期范围',
			'Any' : '不限', 
			'Date Format' : '日期格式',
			'yyyy-mm-dd' : '年-月-日',
			'mm-dd-yyyy' : '月-日-年',
			'mmm dd, yyyy' : '月 日,年',
			'dd.mm.yyyy' : '日.月.年',
			'yyyy-mm' : '年-月',
			'mm-yyyy' : '月-年',
			'mmm, yyyy' : '月,年',
			'mm.yyyy' : '月.年',
			'Scale' : '单位',
			'Show subnet totals' : '子网段流量列入计算',
			'Not considered when calculating total traffic on the last line' : '计算最后一行的合计流量时不列入考虑',
			'Hide IPs without traffic' : '隐藏没有流量的 IP 地址',
			'Show known hostnames' : '显示已知的主机名称',
			'Show shortcuts' : '显示功能快捷',
			'Comma separated list' : '请以逗号分隔 IP 地址',
			'Data' : '资料',
			'Configure' : '设置',
			'Total' : '合计',
			'hosts' : '主机',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(ReplaceIpt, 200);
		setTimeout(RefreshPage, 200);
	}
	
	
	// Tomato 诊断工具的 Ping 页面
	// ===============================================================
	if (TomatoPage == 'tools-ping.asp') {
		Tomato_ToolsPing = document.getElementsByClassName('section-title');
		Tomato_ToolsPing[0].innerHTML = 'Ping 工具';

		Tomato_ToolsPing = document.getElementsByClassName('co1');
		Tomato_ToolsPing[0].innerHTML = '顺序';
		Tomato_ToolsPing = document.getElementsByClassName('co2');
		Tomato_ToolsPing[0].innerHTML = '主机名称 (IP 地址)';
		Tomato_ToolsPing = document.getElementsByClassName('co3');
		Tomato_ToolsPing[0].innerHTML = '接收位元组';
		Tomato_ToolsPing = document.getElementsByClassName('co4');
		Tomato_ToolsPing[0].innerHTML = '生存期限 (TTL)';
		Tomato_ToolsPing = document.getElementsByClassName('co5');
		Tomato_ToolsPing[0].innerHTML = '回应时间 (ms)';
		Tomato_ToolsPing = document.getElementsByClassName('co6');
		Tomato_ToolsPing[0].innerHTML = '相差时间 (ms)';
		
		var words = {
			'Address' : '地址',
			'Ping Count' : 'Ping 次数',
			'Packet Size' : '封包大小',
			'bytes' : '位元组',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 诊断工具的路由追踪页面
	// ===============================================================
	if (TomatoPage == 'tools-trace.asp') {
		Tomato_ToolsTrace = document.getElementsByClassName('section-title');
		Tomato_ToolsTrace[0].innerHTML = '路由追踪';

		Tomato_ToolsTrace = document.getElementsByClassName('co1');
		Tomato_ToolsTrace[0].innerHTML = '跃点';
		Tomato_ToolsTrace = document.getElementsByClassName('co2');
		Tomato_ToolsTrace[0].innerHTML = '主机名称 (IP 地址)';
		Tomato_ToolsTrace = document.getElementsByClassName('co3');
		Tomato_ToolsTrace[0].innerHTML = '最小值 (ms)';
		Tomato_ToolsTrace = document.getElementsByClassName('co4');
		Tomato_ToolsTrace[0].innerHTML = '最大值 (ms)';
		Tomato_ToolsTrace = document.getElementsByClassName('co5');
		Tomato_ToolsTrace[0].innerHTML = '平圴值 (ms)';
		Tomato_ToolsTrace = document.getElementsByClassName('co6');
		Tomato_ToolsTrace[0].innerHTML = '相差时间 (ms)';
		
		var words = {
			'Address' : '地址',
			'Maximum Hops' : '最大跃点数',
			'Maximum Wait Time' : '最大等待时间',
			'seconds per hop' : '每跃点之等候秒数',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 诊断工具的系统指令页面
	// ===============================================================
	if (TomatoPage == 'tools-shell.asp') {
		Tomato_ToolsShell = document.getElementsByClassName('section-title');
		Tomato_ToolsShell[0].innerHTML = '执行系统命令';

		var words = {
			'Command' : '命令',
			'Execute' : '执行',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 诊断工具的搜寻无线基地台页面
	// ===============================================================
	if (TomatoPage == 'tools-survey.asp') {
		Tomato_ToolsSurvey = document.getElementsByClassName('section-title');
		Tomato_ToolsSurvey[0].innerHTML = '无线信号列表';

		Tomato_ToolsSurvey = document.getElementsByClassName('co1');
		Tomato_ToolsSurvey[0].innerHTML = '发现时间';
		Tomato_ToolsSurvey = document.getElementsByClassName('co2');
		Tomato_ToolsSurvey[0].innerHTML = '无线名称 (SSID)';
		Tomato_ToolsSurvey = document.getElementsByClassName('co3');
		Tomato_ToolsSurvey[0].innerHTML = '无线 MAC 地址';
		Tomato_ToolsSurvey = document.getElementsByClassName('co4');
		Tomato_ToolsSurvey[0].innerHTML = '信号强度';
		Tomato_ToolsSurvey = document.getElementsByClassName('co5');
		Tomato_ToolsSurvey[0].innerHTML = '杂讯';
		Tomato_ToolsSurvey = document.getElementsByClassName('co6');
		Tomato_ToolsSurvey[0].innerHTML = '信号品质';
		Tomato_ToolsSurvey = document.getElementsByClassName('co7');
		Tomato_ToolsSurvey[0].innerHTML = '频道';
		Tomato_ToolsSurvey = document.getElementsByClassName('co8');
		Tomato_ToolsSurvey[0].innerHTML = '相容性';
		Tomato_ToolsSurvey = document.getElementsByClassName('co9');
		Tomato_ToolsSurvey[0].innerHTML = '速率';

		var words = {
			'Warning: Wireless connections to this router may be disrupted while using this tool.' : '使用此诊断工具有可能会中断连接到此路由器的无线用户端。',
			'Auto Expire' : '自动停止',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 诊断工具的网络唤醒页面
	// ===============================================================
	if (TomatoPage == 'tools-wol.asp') {
		Tomato_ToolsWol = document.getElementsByClassName('section-title');
		Tomato_ToolsWol[0].innerHTML = '网络唤醒';

		Tomato_ToolsWol = document.getElementsByClassName('co1');
		Tomato_ToolsWol[0].innerHTML = 'MAC 地址';
		Tomato_ToolsWol = document.getElementsByClassName('co2');
		Tomato_ToolsWol[0].innerHTML = 'IP 地址';
		Tomato_ToolsWol = document.getElementsByClassName('co3');
		Tomato_ToolsWol[0].innerHTML = '状态';
		Tomato_ToolsWol = document.getElementsByClassName('co4');
		Tomato_ToolsWol[0].innerHTML = '名称';

		var words = {
			'MAC Address List' : 'MAC 地址清单',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 基本设置的网络连接页面
	// ===============================================================
	if (TomatoPage == 'basic-network.asp') {
		Tomato_BasicNetwork = document.getElementsByClassName('section-title');
		Tomato_BasicNetwork[0].innerHTML = '广域网 / 互联网 (WAN / Internet)';
		Tomato_BasicNetwork[1].innerHTML = '局域网 (LAN)';
		Tomato_BasicNetwork[2].innerHTML = '以太网端口状态 - 设置';
		
		Tomato_BasicNetwork = document.getElementById('_wan_proto').childNodes;
		for (var i = 0 ; Tomato_BasicNetwork.length > i ; i++) {
			switch(Tomato_BasicNetwork[i].innerHTML) {
				case 'DHCP':
					Tomato_BasicNetwork[i].innerHTML = '自动取得 IP (DHCP)';
					break;
				case 'Static':
					Tomato_BasicNetwork[i].innerHTML = '固定 IP';
					break;
				case '3G Modem':
					Tomato_BasicNetwork[i].innerHTML = '3G 数据机';
					break;
			}
		}

		Tomato_BasicNetwork = document.getElementsByClassName('co1');
		Tomato_BasicNetwork[0].innerHTML = '桥接';
		Tomato_BasicNetwork = document.getElementsByClassName('co3');
		Tomato_BasicNetwork[0].innerHTML = 'IP 地址';
		Tomato_BasicNetwork = document.getElementsByClassName('co4');
		Tomato_BasicNetwork[0].innerHTML = '子网掩码';
		Tomato_BasicNetwork = document.getElementsByClassName('co6');
		Tomato_BasicNetwork[0].innerHTML = 'IP 范围 (起始/结束)';
		Tomato_BasicNetwork = document.getElementsByClassName('co7');
		Tomato_BasicNetwork[0].innerHTML = '租期时间 (分钟)';
		
		Tomato_BasicNetwork = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_BasicNetwork.length > i ; i++) {
			switch(Tomato_BasicNetwork[i].innerHTML) {
				case 'MTU':
					Tomato_BasicNetwork[i].innerHTML = '最大传输单位 (MTU)';
					break;
				case 'SSID':
					Tomato_BasicNetwork[i].innerHTML = '无线名称 (SSID)';
					break;
			}
		}

		var words = {
			'Type' : '连接类型',
			'Enabled' : '启用',
			'Disabled' : '停用',
			'Username' : '帐号',
			'Password' : '密码',
			'Service Name' : '服务名称',
			'Options' : '选项',
			'Connect Mode' : '连接模式',
			'Connect On Demand' : '按需连接',
			'Keep Alive' : '保持连接',
			'Max Idle Time' : ' 最大闲置时间',
			'Redial Interval' : '重拨间隔',
			'LCP Echo Interval' : 'LCP 回应间隔时间',
			'range: 1 - 60; default: 10' : '范围: 1 - 60; 默认值: 10',
			'LCP Echo Link fail limit' : 'LCP 回应连接失败限制',
			'range: 1 - 10; default: 5' : '范围: 1 - 10; 默认值: 5',
			'Default Gateway' : '默认网关器',
			'Default' : '默认',
			'Manual' : '手工',
			'Single Line MLPPP' : '单线 MLPPP',
			'Route Modem IP' : '路由数据机 IP 地址',
			'must be in different subnet to router, 0.0.0.0 to disable' : '必须与路由器在不同的子网段, 0.0.0.0 为停用',
			'IP Address' : '固定 IP 地址',
			'Subnet Mask' : '子网掩码',
			'Gateway' : '网关器',
			'Use DHCP' : '使用 DHCP',
			'L2TP Server' : 'L2TP 服务器',
			'Modem device' :  '数据机装置',
			'Advised to turn off PIN Code' : '建议关闭 PIN 码',
			'PIN Code' : 'PIN 码',
			'Modem init string' : '数据机起始字串',
			'Bridge WAN port to primary LAN (br0)' : '桥接广域网至主要区网 (br0)',
			'Static DNS' : '静态DNS',
			'Use dnscrypt-proxy' : '使用 dnscrypt-proxy',
			'Local Port' : '本地端口',
			'Startup Parameters' : '启动参数',
			'for DHCP' : '用于 DHCP',
			'optional' : '可选填',
			'Enable Ports State' : '显示网络端口状态',
			'Show Speed Info' : '显示速度信息',
			'Invert Ports Order' : '颠倒端口顺序',
			'Enable Wireless' : '启用无线网络',
			'MAC Address' : 'MAC 地址',
			'Wireless Mode' : '无线工作模式',
			'Wireless Network Mode' : '无线网络模式',
			// 无线网络
			'Access Point + WDS' : '无线基地台 + WDS',
			'Access Point' : '无线基地台',
			'Wireless Client' : '无线用户端 (Client)',
			'Wireless Ethernet Bridge' : '无线网络桥接 (Bridge)',
			'Wireless' : '无线网络',
			'Link With...' : '指定连结...',
			'Automatic' : '自动连结',
			'Auto' : '自动',
			'B Only' : '仅 802.11b',
			'G Only' : '仅 802.11g',
			'B/G Mixed' : '802.11b/g 混合',
			'N Only' : '仅 802.11n',
			'WPA Personal' : 'WPA 个人版',
			'WPA Enterprise' : 'WPA 企业版',
			'WPA2 Personal' : 'WPA2 个人版',
			'WPA2 Enterprise' : 'WPA2 企业版',
			'Broadcast' : '广播名称',
			'Channel Width' : '带宽',
			'Channel' : '频道',
			'Control Sideband' : '控制 Sideband',
			'Security' : '安全性等级',
			'Encryption' : '加密类型',
			'Passphrase' : '通行码',
			'Shared Key' : '公用密钥',
			'Group Key Renewal' : '群组密钥更新时间',
			'Radius Server' : 'Radius 认证服务器',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 基本设置的 IPv6 设置/基本资料/网际网络时间页面
	// ===============================================================
	if (TomatoPage == 'basic-ipv6.asp' || TomatoPage == 'basic-ident.asp' || TomatoPage == 'basic-time.asp') {
		Tomato_Basic = document.getElementsByClassName('section-title');
		switch(TomatoPage) {
			case 'basic-ipv6.asp':
				Tomato_Basic [0].innerHTML = 'IPv6 设置';
				break;
			case 'basic-ident.asp':
				Tomato_Basic [0].innerHTML = '路由器基本资料';
				break;
			case 'basic-time.asp':
				Tomato_Basic [0].innerHTML = '时间设置';
				break;
		}

		var words = {
			'IPv6 Service Type' : 'IPv6 服务型态',
			'Disabled' : '停用',
			'Other (Manual Configuration)' : '其它 (自定义设置)',
			'Assigned / Routed Prefix' : '指定 / 路由前置码',
			'Prefix Length' : '前置码长度 (Prefix)',
			'Router IPv6 Address' : '路由器 IPv6 地址',
			'Default' : '默认',
			'Manual' : '手工',
			'Static DNS' : '静态DNS',
			'Accept RA from' : '接受远端路由公告 (RA)',
			'Relay Anycast Address' : '中继广播地址',
			'Tunnel MTU' : '通道 MTU',
			'Tunnel TTL' : '通道 TTL',
			'for default' : '为默认值',
			'Tunnel Remote Endpoint (IPv4 Address)' : '通道远端端点 IPv4 地址',
			'Tunnel Client IPv6 Address' : '通道用户端的 IPv6 地址',
			'6rd Routed Prefix' : '6rd 路由前置码',
			'6rd Prefix Length' : '6rd 前置码长度 (Prefix)',
			'Usually' : '通常为',
			'usually' : '通常为',
			'6RD Tunnel Border Relay (IPv4 Address)' : '6rd 通道边界中继地址 (IPv4 地址)',
			'6RD IPv4 Mask Length' : '6rd IPv4 掩码长度',
			'IPv6 WAN Interface' : 'IPv6 WAN 界面',
			'Router Name' : '路由器名称',
			'Hostname' : '主机名称',
			'Domain Name' : '域名',
			'Router Time' : '路由器时间',
			'Not Available' : '不可使用',
			'Sun' : '周日',
			'Mon' : '周一',
			'Tue' : '周二',
			'Wed' : '周三',
			'Thu' : '周四',
			'Fri' : '周五',
			'Sat' : '周六',
			'Time Zone' : '时区',
			'UTC+08:00 China, Hong Kong, Western Australia, Singapore, Taiwan' : 'UTC+08:00 台湾, 中国, 香港, 西澳, 新加坡',
			'Auto Daylight Savings Time' : '自动调整日光节约时间',
			'Auto Update Time' : '自动更新时间',
			'Never' : '停用',
			'Only at startup' : '仅在启动后',
			'Every hour' : '每 1 小时',
			'Every' : '每',
			'hours' : '小时',
			'Trigger Connect On Demand' : '重新连接时触发校时',
			'NTP Time Server' : 'NTP 时间服务器',
			'Custom...' : '自定义...',
			'Africa' : '非洲',
			'Asia' : '亚洲',
			'Europe' : '欧洲',
			'Oceania' : '大洋洲',
			'North America' : '北美洲',
			'South America' : '南美洲',
			'US' : '美国',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 基本设置的动态 DNS 页面
	// ===============================================================
	if (TomatoPage == 'basic-ddns.asp') {
		Tomato_BasicDdns = document.getElementsByClassName('section-title');
		Tomato_BasicDdns[0].innerHTML = '动态名称服务器 (Dynamic DNS)';
		Tomato_BasicDdns[1].innerHTML = '动态名称服务器 1';
		Tomato_BasicDdns[2].innerHTML = '动态名称服务器 2';

		var words = {
			'Use WAN IP Address' : '使用广域网 IP 地址',
			'recommended' : '建议',
			'Use External IP Address Checker (every 10 minutes)' : '使用外部 IP 地址检验器 (每10分钟)',
			'Auto refresh every' : '自动更新周期',
			'days' : '天',
			'disable' : '停用',
			'Offline' : '离线',
			'Custom IP Address' : '自定义 IP 地址',
			'Custom IP address' : '自定义 IP 地址',
			'This service determines the IP address using its own method.' : '此服务商使用它自己的方式来判断 IP 地址。',
			'Use @IP for the current IP address' : '使用 @IP 于目前的 IP 地址',
			'IP address' : 'IP 地址',
			'Service' : '服务商',
			'None' : '停用',
			'- Static' : '- 静态',
			'- Dynamic' : '- 动态',
			'Custom URL' : '自定义网址',
			'Custom' : '自定义',
			'URL' : '网址',
			'Username' : '帐号',
			'Password' : '密码',
			'Hostname' : '主机名称',
			'Wildcard' : '万用字元',
			'Backup MX' : '备援 MX 记录',
			'Force next update' : '强制下次更新',
			'Last IP Address' : '目前 IP 地址',
			'Last Result' : '目前更新结果',
			'Save state when IP changes (nvram commit)' : '当 IP 变更时即储存状态 (写入 NVRAM)',
			'Domain' : '网域',
			'optional' : '可选填',
			'User ID' : '用户 ID',
			'not your username' : '不是你的用户名称',
			'Global Tunnel ID' : '通道 ID',
			'Email Address' : '电子邮件地址',
			'Group' : '群组',
			'Network' : '网络',
			'Use as DNS' : '当成 DNS 使用',
			'Current DNS' : '目前的 DNS',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 基本设置的静态 DHCP/ARP/IPT 页面
	// ===============================================================
	if (TomatoPage == 'basic-static.asp') {
		Tomato_BasicStatic = document.getElementsByClassName('section-title');
		Tomato_BasicStatic[0].innerHTML = '静态 DHCP/ARP/IPT';
		Tomato_BasicStatic[1].innerHTML = '选项';
		
		Tomato_BasicStatic = document.getElementsByClassName('co1');
		Tomato_BasicStatic[0].innerHTML = 'MAC 地址';
		Tomato_BasicStatic = document.getElementsByClassName('co2');
		Tomato_BasicStatic[0].innerHTML = '绑定';
		Tomato_BasicStatic = document.getElementsByClassName('co3');
		Tomato_BasicStatic[0].innerHTML = 'IP 地址';
		Tomato_BasicStatic = document.getElementsByClassName('co4');
		Tomato_BasicStatic[0].innerHTML = 'IP 流量监控';
		Tomato_BasicStatic = document.getElementsByClassName('co5');
		Tomato_BasicStatic[0].innerHTML = '主机名称';

		var words = {
			'Enabled' : '启用',
			'Ignore DHCP requests from unknown devices' : '忽略来自未知装置的 DHCP 请求',
			'Notes' : '说明',
			'Click here to hide' : '隐藏细节',
			'Click here to show' : '显示细节',
			'MAC Address' : 'MAC 地址',
			'Unique identifier associated to a network interface on this particular device.' : '每个网络装置会有一个专属于它的识别地址。',
			'Bound to' : '绑定',
			'Enforce static ARP binding of this particular IP/MAC address pair.' : '在此 IP 或 MAC 地址上指定静态 ARP 绑定。',
			'IP Address' : 'IP 地址',
			'Network address assigned to this device on the local network.' : '在本地网络上指定网络地址给这个网络装置。',
			'IPTraffic' : 'IP 流量监控',
			'Keep track of bandwidth usage for this IP address.' : '监控此 IP 地址的网络流量。',
			'Hostname' : '主机名称',
			'Human-readable nickname/label assigned to this device on the network.' : '在本地网络上指定名称给这个网络装置。',
			'Other relevant notes/hints' : '其他相关说明及提示',
			'To specify multiple hostnames for a device, separate them with spaces.' : '如要在网络装置上指定多重主机名称, 请用空格隔开各个名称。',
			'To enable/enforce static ARP binding for a particular device, it must have only one MAC associated with that particular IP address' : '如要在网络装置上启用/执行静态 ARP 绑定, 每个 MAC 地址必须指定到不同的 IP 地址',
			"(i.e. you can't have two MAC addresses linked to the same hostname/device in the table above)." : '(即在上面的列表里, 你不能有两个 MAC 地址指定到相同的主机或网络装置)。',
			'When ARP binding is enabled for a particular MAC/IP address pair, that device will always be shown as "active" in the' : '当对一个特定的 MAC 地址或 IP 地址启用了静态 ARP 绑定后, 那个装置将永远在',
			'Wake On LAN' : '网络唤醒',
			'table.' : '列表里显示为 "Active"。',
			'See also the' : '也可以查看在进阶设置里的',
			'Advanced DHCP/DNS' : 'DHCP/DNS 设置',
			'settings page for more DHCP-related configuration options.' : '页面,里面有更多 DHCP 相关设置选项。',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 基本设置的无线存取控制页面
	// ===============================================================
	if (TomatoPage == 'basic-wfilter.asp') {
		Tomato_BasicWfilter = document.getElementsByClassName('section-title');
		Tomato_BasicWfilter[0].innerHTML = '无线存取控制';
		
		Tomato_BasicWfilter = document.getElementsByClassName('co1');
		Tomato_BasicWfilter[0].innerHTML = 'MAC 地址';
		Tomato_BasicWfilter = document.getElementsByClassName('co2');
		Tomato_BasicWfilter[0].innerHTML = '描述';

		var words = {
			'Disable filter' : '关闭',
			'Permit only the following clients' : '允许下列的 MAC 地址连接',
			'Block the following clients' : '拒绝下列的 MAC 地址连接',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 进阶设置的连接追踪/过滤页面
	// ===============================================================
	if (TomatoPage == 'advanced-ctnf.asp') {
		Tomato_AdvancedCtnf = document.getElementsByClassName('section-title');
		Tomato_AdvancedCtnf[0].innerHTML = '连接数';
		Tomato_AdvancedCtnf[1].innerHTML = 'TCP 超时';
		Tomato_AdvancedCtnf[2].innerHTML = 'UDP 超时';
		Tomato_AdvancedCtnf[3].innerHTML = '其他超时';
		Tomato_AdvancedCtnf[4].innerHTML = '追踪 / NAT 辅助模组';
		Tomato_AdvancedCtnf[5].innerHTML = '其它设置';
		
		var words = {
			'Maximum Connections' : '最大连接数',
			'Hash Table Size' : '杂凑表大小 (Hash Table)',
			'count current...' : '计算目前的连接数...',
			'connections currently tracked' : '个连接数已追踪到',
			'in this state' : '个连接在这种状态',
			'TTL Adjust' : 'TTL 调整',
			'None' : '不调整',
			'Custom' : '自定义',
			'Inbound Layer 7' : '启用 L7 应用层过滤 (下载)',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 进阶设置的 DHCP/DNS 设置页面
	// ===============================================================
	if (TomatoPage == 'advanced-dhcpdns.asp') {
		Tomato_AdvancedDhcpdns = document.getElementsByClassName('section-title');
		Tomato_AdvancedDhcpdns[0].innerHTML = 'DHCP / DNS 服务器 (LAN)';
		Tomato_AdvancedDhcpdns[1].innerHTML = 'DHCP 用户端 (WAN)';
		
		var words = {
			'Use internal DNS' : '使用内建 DNS',
			'Use received DNS with user-entered DNS' : '使用自定义 DNS',
			'Prevent DNS-rebind attacks' : ' 防止 DNS 劫持攻击',
			'Intercept DNS port' : '拦截 DNS 连接端口',
			'Use user-entered gateway if WAN is disabled' : '当广域网停用时使用自定义网关',
			'Ignore DHCP requests from unknown devices' : '忽略来自未知装置的 DHCP 请求',
			'Maximum active DHCP leases' : 'DHCP 分配最大数量',
			'Static lease time' : '固定租期时间',
			'Same as normal lease time' : '与基本设置→网络→租期时间相同',
			'"Infinite"' : '不限制',
			'Custom configuration' : '自定义设置',
			'Custom' : '自定义',
			'Announce IPv6 on LAN' : '公告 IPv6 在区域网络',
			'Mute dhcpv4 logging' : '隐藏 dhcpv4 记录',
			'Mute dhcpv6 logging' : '隐藏 dhcpv6 记录',
			'Mute RA logging' : '隐藏 RA 记录',
			'DHCPC Options' : 'DHCPC 选项',
			'Reduce packet size' : '减少封包大小',
			'Notes' : '说明',
			'Click here to hide' : '隐藏细节',
			'Click here to show' : '显示细节',
			'DHCP / DNS Server (LAN)' : 'DHCP / DNS 服务器 (LAN)',
			'Allow dnsmasq to be your DNS server on LAN.' : '允许 Dnsmasq 为区域网络的 DNS 服务器。',
			'Add DNS servers received from your WAN connection to the static DNS server list (see' : '使用网络连接页面里所设置的 DNS 服务器 (请参考',
			'Network' : '网络连接',
			'configuration).' : '设置)。',
			'Enable DNS rebinding protection on Dnsmasq.' : '在 Dnsmasq 启用 DNS 劫持保护 (DNS-rebind)。',
			'Any DNS requests/packets sent out to UDP port 53 are redirected to the internal DNS server.' : '任何发送到 UDP 连接端口 53 的 DNS 请求或封包将重新导向到内部的 DNS 服务器。',
			'DHCP will use the IP address of the router as the default gateway on each LAN.' : 'DHCP 将使用路由器自定义的默认网关器 IP 地址做为默认网关器。',
			'Ignore DHCP requests (...)' : '忽略来自未知装置的 DHCP 请求',
			'Dnsmasq will ignore DHCP requests ' : '',
			'to Only MAC addresses listed on the' : '请在',
			'Static DHCP/ARP' : '静态 DHCP/ARP',
			"page won't be able to obtain an IP address through DHCP." : '页面里建立 MAC 地址清单, 否则 Dnsmasq 将忽略未知装置的 DHCP 请求。',
			'Self-explanatory.' : '不用解释。',
			'Absolute maximum amount of time allowed for any DHCP lease to be valid.' : 'DHCP 租期存活时间的绝对最大值。',
			'Extra options to be added to the Dnsmasq configuration file.' : '在 Dnsmasq 设置档新增额外的设置。',
			'DHCP Client (WAN)' : 'DHCP 用户端 (WAN)',
			'Extra options for the DHCP client.' : 'DHCP 用户端的额外选项。',
			'Other relevant notes/hints' : '其他相关说明及提示',
			"The contents of file /etc/dnsmasq.custom are also added to the end of Dnsmasq's configuration file (if it exists)." : '当 /etc/dnsmasq.custom 档案存在时, 将其内容加入 Dnsmasq 的设置档末端。',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 进阶设置的防火墙页面
	// ===============================================================
	if (TomatoPage == 'advanced-firewall.asp') {
		Tomato_AdvancedFirewall = document.getElementsByClassName('section-title');
		Tomato_AdvancedFirewall[0].innerHTML = '防火墙 (Firewall)';
		Tomato_AdvancedFirewall[1].innerHTML = '网络地址转译 (NAT)';
		Tomato_AdvancedFirewall[2].innerHTML = '多点传播 (Multicast)';
		
		var words = {
			'Respond to ICMP ping' : '回应 ICMP ping',
			'Limits per second' : '限制每秒钟回应数量',
			'request per second' : '每秒钟回应数量',
			'Enable SYN cookies' : '启用 SYN cookies',
			'All' : '全部',
			'Forwarded Only' : '只有被转发的封包',
			'Disabled' : '停用',
			'Enable IGMPproxy' : '启用 IGMP 代理',
			'Enable Udpxy' : '启用 Udpxy',
			'Enable client statistics' : '启用用户端统计',
			'Max clients' : '最大用户端数量',
			'Udpxy port' : 'Udpxy 连接端口',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 进阶设置的 MAC 地址页面
	// ===============================================================
	if (TomatoPage == 'advanced-mac.asp') {
		Tomato_AdvancedMac = document.getElementsByClassName('section-title');
		Tomato_AdvancedMac[0].innerHTML = 'MAC 地址';
		
		var words = {
			'WAN Port' : '广域网的 MAC 地址',
			'Wireless Interface' : '无线网络的 MAC 地址',
			"Router's LAN MAC Address" : '区域网络的 MAC 地址',
			"Computer's MAC Address" : '电脑网卡的 MAC 地址',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 进阶设置的其他设置页面
	// ===============================================================
	if (TomatoPage == 'advanced-misc.asp') {
		Tomato_AdvancedMisc = document.getElementsByClassName('section-title');
		Tomato_AdvancedMisc[0].innerHTML = '其他设置';
		
		var words = {
			'Boot Wait Time' : '路由启动等待时间',
			'WAN Port Speed' : 'WAN 端口连接速度',
			'10Mb Full' : '10Mb 全双工',
			'10Mb Half' : '10Mb 半双工',
			'100Mb Full' : '100Mb 全双工',
			'100Mb Half' : '100Mb 半双工',
			'Auto' : '自动侦测',
			'Not all models support these options.' : '并非所有机型皆支援这些选项。',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 进阶设置的路由表页面
	// ===============================================================
	if (TomatoPage == 'advanced-routing.asp') {
		Tomato_AdvancedRouting = document.getElementsByClassName('section-title');
		Tomato_AdvancedRouting[0].innerHTML = '目前的路由表';
		Tomato_AdvancedRouting[1].innerHTML = '静态路由表';
		Tomato_AdvancedRouting[2].innerHTML = '其他设置';
		
		Tomato_AdvancedRouting = document.getElementsByClassName('co1');
		for (var i = 0 ; Tomato_AdvancedRouting.length > i ; i++) {
			switch(Tomato_AdvancedRouting[i].innerHTML) {
				case 'Destination':
					Tomato_AdvancedRouting[i].innerHTML = '目的地';
					break;
				case 'default':
					Tomato_AdvancedRouting[i].innerHTML = '默认';
					break;
			}
		}
		
		Tomato_AdvancedRouting = document.getElementsByClassName('co2');
		for (var i = 0 ; Tomato_AdvancedRouting.length > i ; i++) {
			switch(Tomato_AdvancedRouting[i].innerHTML) {
				case 'Gateway / Next Hop':
					Tomato_AdvancedRouting[i].innerHTML = '网关 / 下一跃点';
					break;
				case 'Gateway':
					Tomato_AdvancedRouting[i].innerHTML = '网关';
					break;
			}
		}
		
		Tomato_AdvancedRouting = document.getElementsByClassName('co3');
		for (var i = 0 ; Tomato_AdvancedRouting.length > i ; i++) {
			switch(Tomato_AdvancedRouting[i].innerHTML) {
				case 'Subnet Mask':
					Tomato_AdvancedRouting[i].innerHTML = '子网掩码';
					break;
			}
		}
		
		Tomato_AdvancedRouting = document.getElementsByClassName('co4');
		for (var i = 0 ; Tomato_AdvancedRouting.length > i ; i++) {
			switch(Tomato_AdvancedRouting[i].innerHTML) {
				case 'Metric':
					Tomato_AdvancedRouting[i].innerHTML = '计量';
					break;
			}
		}
		
		Tomato_AdvancedRouting = document.getElementsByClassName('co5');
		for (var i = 0 ; Tomato_AdvancedRouting.length > i ; i++) {
			switch(Tomato_AdvancedRouting[i].innerHTML) {
				case 'Interface':
					Tomato_AdvancedRouting[i].innerHTML = '界面';
					break;
			}
		}
		
		Tomato_AdvancedRouting = document.getElementsByClassName('co6');
		for (var i = 0 ; Tomato_AdvancedRouting.length > i ; i++) {
			switch(Tomato_AdvancedRouting[i].innerHTML) {
				case 'Description':
					Tomato_AdvancedRouting[i].innerHTML = '描述';
					break;
			}
		}
		
		var words = {
			'Mode' : '模式',
			'Gateway' : '网关',
			'Router' : '路由',
			'Efficient Multicast Forwarding' : '高效多点传播转发 (Multicast)',
			'DHCP Routes' : 'DHCP 路由',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 进阶设置的洋葱路由页面
	// ===============================================================
	if (TomatoPage == 'advanced-tor.asp') {
		Tomato_AdvancedTor = document.getElementsByClassName('section-title');
		Tomato_AdvancedTor[0].innerHTML = '洋葱路由设置 (TOR)';
		Tomato_AdvancedTor[1].innerHTML = '说明';
		
		var words = {
			'Enable TOR' : '启用 TOR',
			'Socks Port' : 'Socks 连接端口',
			'Trans Port' : 'Trans 连接端口',
			'DNS Port' : 'DNS 连接端口',
			'Data Directory' : '资料目录',
			'Redirect all users from' : '选择要重新导向的用户',
			'Only selected IP`s' : '仅自定义的 IP 范围',
			'Custom Configuration' : '自定义设置',
			'Be patient. Starting the TOR client can take from several seconds to several minutes.' : '请耐心等候, 启动 TOR 用户端可能需要几秒到几分钟的时间。',
			'ex:' : '例如:',
			'Only connections to destination port 80 are redirected to TOR.' : ' 只有连接到目的地连接端口 80 的连接会被重新导向到 TOR。',
			"Caution! - If your router only has 32MB of RAM, you'll have to use swap." : ' 注意！如果你的路由器只有 32MB 记忆体, 你必须使用虚拟记忆体 (swap)。',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 进阶设置的虚拟区域网络页面
	// ===============================================================
	if (TomatoPage == 'advanced-vlan.asp') {
		Tomato_AdvancedVlan = document.getElementsByClassName('section-title');
		Tomato_AdvancedVlan[0].innerHTML = '虚拟局域网 (VLAN)';
		Tomato_AdvancedVlan[1].innerHTML = 'VLAN 识别码偏移 (VID Offset)';
		Tomato_AdvancedVlan[2].innerHTML = '无线网络';
		Tomato_AdvancedVlan[3].innerHTML = 'VLAN 中继支援 (VLAN Trunk)';
		
		Tomato_AdvancedVlan = document.getElementsByClassName('co3');
		Tomato_AdvancedVlan[0].innerHTML = '端口1';
		Tomato_AdvancedVlan = document.getElementsByClassName('co4');
		Tomato_AdvancedVlan[0].innerHTML = '标签';
		Tomato_AdvancedVlan = document.getElementsByClassName('co5');
		Tomato_AdvancedVlan[0].innerHTML = '端口2';
		Tomato_AdvancedVlan = document.getElementsByClassName('co6');
		Tomato_AdvancedVlan[0].innerHTML = '标签';
		Tomato_AdvancedVlan = document.getElementsByClassName('co7');
		Tomato_AdvancedVlan[0].innerHTML = '端口3';
		Tomato_AdvancedVlan = document.getElementsByClassName('co8');
		Tomato_AdvancedVlan[0].innerHTML = '标签';
		Tomato_AdvancedVlan = document.getElementsByClassName('co9');
		Tomato_AdvancedVlan[0].innerHTML = '端口4';
		Tomato_AdvancedVlan = document.getElementsByClassName('co10');
		Tomato_AdvancedVlan[0].innerHTML = '标签';
		Tomato_AdvancedVlan = document.getElementsByClassName('co11');
		Tomato_AdvancedVlan[0].innerHTML = 'WAN 端口';
		Tomato_AdvancedVlan = document.getElementsByClassName('co12');
		Tomato_AdvancedVlan[0].innerHTML = '标签';
		Tomato_AdvancedVlan = document.getElementsByClassName('co13');
		Tomato_AdvancedVlan[0].innerHTML = '默认';
		Tomato_AdvancedVlan = document.getElementsByClassName('co14');
		Tomato_AdvancedVlan[0].innerHTML = '桥接';
		
		var words = {
			'none' : '无',
			'range: 0 - 4080; must be a multiple of 16; set to 0 to disable' : '范围: 0 - 4080; 必须为 16 的倍数; 设置成 0 为停用',
			'Notes' : '说明',
			'Click here to hide' : '隐藏细节',
			'Click here to show' : '显示细节',
			'Unique identifier of a VLAN.' : 'VLAN 的唯一识别码',
			'EXPERIMENTAL' : '尚在研究',
			"Allows overriding 'traditional' VLAN/VID mapping with arbitrary VIDs for each VLAN (set to '0' to use 'regular' VLAN/VID mappings instead). Warning: this hasn't been verified/tested on anything but a Cisco/Linksys E3000 and may not be supported by your particular device/model" : '允许在每个 VLAN 上将传统的 VLAN/VID 映射到任意的 VID 编号 (设置成 0 时将会使用正常的 VLAN/VID 来替代映射)。警告: 这仅在 Cisco/Linksys E3000 检验并测试过, 所以有可能会不支援你的装置及机型',
			'see notes on "VID Offset" below' : '请参考说明下方的 "VID Offset"',
			'Ports 1-4 & WAN' : '端口 1-4 & WAN',
			'Which ethernet ports on the router should be members of this VLAN.' : '选择将路由器上的哪些乙太网络端口加入为这个 VLAN 的成员。',
			'Tagged' : '标签',
			'Enable 802.1Q tagging of ethernet frames on a particular port/VLAN' : '替指定端口/VLAN 的乙太网络讯框加入 802.1Q 标签信息',
			'unknown support for this model...contact the developper (Victek))' : '需启用 VLAN Trunk 才可用, 若有不支援的机型,请联络作者 Victek)。',
			'Default' : '默认',
			'VLAN ID assigned to untagged frames received by the router.' : 'VLAN ID 会分配无标签信息的讯框给路由器接收。',
			'Determines if this VLAN ID should be treated as WAN, part of a LAN bridge or just left alone (i.e. member of a 802.1Q trunk, being managed manually via scripts, etc...).' : '确认此 VLAN ID 应该被视为广域网 (WAN), 还是区域网络 (LAN) 的一部份,又或者是独立网络 (即 802.1Q trunk 成员, 经由脚本手动管理, 其它...)。',
			'First 802.1Q VLAN tag to be used as ' : '首个 802.1Q VLAN 标签用于分配 VLAN 及 VID 的',
			'base/initial tag/VID' : '基本起始标签/VID',
			'for VLAN and VID assignments.' : '。',
			'This allows using VIDs larger than 15 on (older) devices such as the Linksys WRT54GL v1.1 (in contiguous blocks/ranges with up to 16 VLANs/VIDs).' : '这将允许一些像是 Linksys WRT54GL v1.1 的老装置能够使用大于 15 的 VID 编号 (在相邻的区块/范围内可多达 16 个 VLAN/VID)。',
			"Set to '0' (zero) to disable this feature and VLANs will have the very same/identical value for its VID, as usual (from 0 to 15)." : '设置成 0 时将会关闭这个功能, 且 VLAN 也将会与 VID 拥有同样的识别码编号, 通常是从 0 到 15。',
			'Assignments of wireless interfaces to different LAN briges. You should probably be using and/or check things on' : '将无线网络界面桥接到不同的区域网络 (LAN)。你可以从以下两个页面设置并检查与其相关的设置项目:',
			'Advanced/Virtual Wireless' : '进阶设置/虚拟无线网络',
			'Wireless' : '无线网络',
			'Basic/Network' : '基本设置/网络连接',
			'Other relevant notes/hints' : '其他相关说明及提示',
			'One VID' : '至少一个 VID',
			'must' : '必须',
			'be assigned to WAN.' : '要桥接至广域网 (WAN)。',
			'be selected as the default.' : '要设置成默认 VID。',
			'This is an' : '这是个',
			'experimental' : '尚在研究',
			"feature and hasn't been tested in anything but a Linksys WRT54GL v1.1 running a Teaman-ND K24 build and a Cisco/Linksys E3000 running a Teaman-RT K26 build." : '的功能, 仅在 Linksys WRT54GL v1.1 搭载 Teaman-ND K24 建构版及 Cisco/Linksys E3000 搭载 Teaman-RT K26 建构版的环境下测试过。',
			"There's lots of things that could go wrong, please do think about what you're doing and take a backup before hitting the 'Save' button on this page!" : '有很多地方可能会出现错误, 当你在此页面按下『储存』键之前, 请好好想想你做了些什么!',
			').' : ')。',
			'First 802.1Q VLAN tag' : '首个 802.1Q VLAN 标签',
			'Enable' : '启用',
			'Bridge' : '桥接',
			' to' : ' 到',
			'and' : '及',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 进阶设置的区域网络控制页面
	// ===============================================================
	if (TomatoPage == 'advanced-access.asp') {
		Tomato_AdvancedAccess = document.getElementsByClassName('section-title');
		Tomato_AdvancedAccess[0].innerHTML = '区域网络控制 (LAN Access)';
		
		var words = {
			'Notes' : '说明',
			'Click here to hide' : '隐藏细节',
			'Click here to show' : '显示细节',
			'Src Address' : '来源地址',
			'Src' : '来源',
			'Source LAN bridge.' : '区域网络桥接来源。',
			'optional' : '可选填',
			'Source address allowed. Ex: "1.2.3.4", "1.2.3.4 - 2.3.4.5", "1.2.3.0/24".' : '可被允许的来源地址。例如: "1.2.3.4", "1.2.3.4 - 2.3.4.5", "1.2.3.0/24"。',
			'Dst Address' : '目的地址',
			'Dst' : '目的',
			'Destination LAN bridge.' : '区域网络桥接目的。',
			'Destination address inside the LAN.' : '目的 LAN 内部的地址。',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(ReplaceAdvanced, 200);
		setTimeout(RefreshPage, 200);
	}


	// Tomato 进阶设置的虚拟无线网络控制页面
	// ===============================================================
	if (TomatoPage == 'advanced-wlanvifs.asp') {
		Tomato_AdvancedWlanvifs = document.getElementsByClassName('section-title');
		Tomato_AdvancedWlanvifs[0].innerHTML = '虚拟无线网络界面';
		
		Tomato_AdvancedWlanvifs = document.getElementsByTagName('b');
		for (var i = 0 ; Tomato_AdvancedWlanvifs.length > i ; i++) {
			switch(Tomato_AdvancedWlanvifs[i].innerHTML) {
				case 'SSID':
					Tomato_AdvancedWlanvifs[i].innerHTML = '无线名称 (SSID)';
					break;
				case 'Bridge':
					Tomato_AdvancedWlanvifs[i].innerHTML = '桥接';
					break;
			}
		}
		
		Tomato_AdvancedWlanvifs = document.getElementsByTagName('i');
		for (var i = 0 ; Tomato_AdvancedWlanvifs.length > i ; i++) {
			switch(Tomato_AdvancedWlanvifs[i].innerHTML) {
				case 'set':
					Tomato_AdvancedWlanvifs[i].innerHTML = '设置值';
					break;
				case 'recreated':
					Tomato_AdvancedWlanvifs[i].innerHTML = '重建';
					break;
			}
		}
		
		Tomato_AdvancedWlanvifs = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_AdvancedWlanvifs.length > i ; i++) {
			switch(Tomato_AdvancedWlanvifs[i].innerHTML) {
				case 'SSID':
					Tomato_AdvancedWlanvifs[i].innerHTML = '无线名称 (SSID)';
					break;
			}
		}
		
		var words = {
			'Overview' : '概观',
			'none' : '无',
			'Wireless Interfaces Details' : '无线网络界面信息',
			'Virtual Interfaces' : '虚拟界面',
			'max 16' : '最多 16 个',
			'Notes' : '说明',
			'Click here to hide' : '隐藏细节',
			'Click here to show' : '显示细节',
			'Wireless VIF name.' : '虚拟无线网络界面名称。',
			'If this VIF should be active and brought online.' : '启用后才会将此虚拟无线网络界面上线运作。',
			'Wireless Service Set Identifier.' : '设置无线网络服务的识别名称。',
			'Interface mode: Access Point, WDS, Wireless Client, etc...' : '界面模式: 无线基地台 (AP), 无线分散系统 (WDS), 无线用户端 (Client), 其它...',
			'Which LAN bridge this VIF should be assigned.' : '将虚拟无线网络界面桥接到指定的区域网络 (LAN)。',
			'Other relevant notes/hints' : '其他相关说明及提示',
			"When creating/defining a new wireless VIF, it's MAC address will be shown (incorrectly) as '00:00:00:00:00:00', as it's unknown at that moment (until network is restarted and this page is reloaded)." : "当建立或定义一个新的虚拟无线网络界面时, 它的 MAC 地址将会显示为 '00:00:00:00:00:00' (不正确的值), 因为此时还并未取得信息, 直到网络重启并且重新载入此页面后才会显示正确的值。",
			'When saving changes, the MAC addresses of all defined non-primary wireless VIFs could sometimes be (already) ' : '当储存变更时, 所有己定义的非主要虚拟无线网络界面的',
			'but might be ' : ', 有时可能会被 WL 驱动',
			'by the WL driver (so that previously defined/saved settings might need to be updated/changed accordingly on' : '(因此在你储存并重启你的路由器后, 先前已定义/储存的设置值可能需要在',
			'Advanced/MAC Address' : '进阶设置/MAC 地址',
			'after saving settings and rebooting your router).' : '进行对应的更新或变更)。',
			'This web interface allows configuring a maximum of 4 VIFs for each physical wireless interface available - up to 3 extra VIFs can be defined in addition to the primary VIF' : '这个 Web 界面允许你替每个可用的实体无线网络界面设置最多 4 个虚拟无线网络界面 - 除了主要的虚拟无线网络界面外, 可再定义并加入 3 个扩充的虚拟无线网络界面',
			'on devices with multiple VIF capabilities' : '无线网卡装置须支援多重虚拟无线网络界面',
			'By definition, configuration settings for the ' : '如果仅是要替实体无线网络界面定义或设置其',
			'primary VIF' : '主要的无线网络界面',
			" of any physical wireless interfaces shouldn't be touched here (use the" : ', 你不应该在此页面设置, 这会使得设置变得较繁杂 (请改由',
			'Basic/Network' : '基本设置/网络连接',
			'page instead).' : '页面来设置)。',
			'Enable Interface' : '启用界面',
			'MAC Address' : 'MAC 地址',
			'Wireless Mode' : '无线工作模式',
			'Wireless Network Mode' : '无线工作模式',
			'note: you might wish to cross-check settings later on' : '说明: 你稍后可能须要交叉比对设置值在',
			'is not defined.' : '尚未定义。',
			'warning: WL driver reports BSSID' : '警告: WL 驱动回报的 MAC 地址为',
			'Enabled' : '启用',
			'Disabled' : '停用',
			'Mode' : '模式',
			'Interface' : '界面',
			').' : ')。',
			// 无线网络
			'Access Point + WDS' : '无线基地台 + WDS',
			'Access Point' : '无线基地台',
			'Wireless Client' : '无线用户端 (Client)',
			'Wireless Ethernet Bridge' : '无线网络桥接 (Bridge)',
			'Wireless' : '无线网络',
			'Link With...' : '指定连结...',
			'Automatic' : '自动连结',
			'Auto' : '自动',
			'B Only' : '仅 802.11b',
			'G Only' : '仅 802.11g',
			'B/G Mixed' : '802.11b/g 混合',
			'N Only' : '仅 802.11n',
			'WPA Personal' : 'WPA 个人版',
			'WPA Enterprise' : 'WPA 企业版',
			'WPA2 Personal' : 'WPA2 个人版',
			'WPA2 Enterprise' : 'WPA2 企业版',
			'Broadcast' : '广播名称',
			'Channel Width' : '带宽',
			'Channel' : '频道',
			'Control Sideband' : '控制 Sideband',
			'Security' : '安全性等级',
			'Encryption' : '加密类型',
			'Passphrase' : '通行码',
			'Shared Key' : '公用密钥',
			'Group Key Renewal' : '群组密钥更新时间',
			'Radius Server' : 'Radius 认证服务器',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		
		var f = unsafeWindow.save;
		unsafeWindow.save = function() {
			Tomato_ButtonValue = document.getElementsByTagName('input');
			for (var i = 0 ; Tomato_ButtonValue.length > i ; i++) {
				switch(Tomato_ButtonValue[i].value) {
					case '储存':
						Tomato_ButtonValue[i].value = 'Save';
						break;
				}
			}
			f();
			Replaceword();
		}
		
		Replaceword();
		setTimeout(ReplaceAdvanced, 200);
		setTimeout(RefreshPage, 200);
	}


	// Tomato 进阶设置的无线网络页面
	// ===============================================================
	if (TomatoPage == 'advanced-wireless.asp') {
		Tomato_AdvancedWireless = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_AdvancedWireless.length > i ; i++) {
			switch(Tomato_AdvancedWireless[i].innerHTML) {
				case 'Afterburner':
					Tomato_AdvancedWireless[i].innerHTML = 'Afterburner (125HSM)';
					break;
				case 'AP Isolation':
					Tomato_AdvancedWireless[i].innerHTML = '禁止无线用户互通';
					break;
				case 'Authentication Type':
					Tomato_AdvancedWireless[i].innerHTML = '认证类型';
					break;
				case 'Basic Rate':
					Tomato_AdvancedWireless[i].innerHTML = '基本速率';
					break;
				case 'Beacon Interval':
					Tomato_AdvancedWireless[i].innerHTML = '讯号间隔 (Beacon)';
					break;
				case 'CTS Protection Mode':
					Tomato_AdvancedWireless[i].innerHTML = 'CTS 保护模式';
					break;
				case 'Regulatory Mode':
					Tomato_AdvancedWireless[i].innerHTML = '管制模式';
					break;
				case 'Country / Region':
					Tomato_AdvancedWireless[i].innerHTML = '国家 / 地区';
					break;
				case 'Bluetooth Coexistence':
					Tomato_AdvancedWireless[i].innerHTML = '蓝芽共存';
					break;
				case 'Distance / ACK Timing':
					Tomato_AdvancedWireless[i].innerHTML = '距离 / ACK 时序';
					break;
				case 'DTIM Interval':
					Tomato_AdvancedWireless[i].innerHTML = 'DTIM 间隔';
					break;
				case 'Fragmentation Threshold':
					Tomato_AdvancedWireless[i].innerHTML = '封包分割门槛';
					break;
				case 'Frame Burst':
					Tomato_AdvancedWireless[i].innerHTML = '讯框爆发 (Frame Burst)';
					break;
				case 'Maximum Clients':
					Tomato_AdvancedWireless[i].innerHTML = '最大无线用户端数量';
					break;
				case 'Multicast Rate':
					Tomato_AdvancedWireless[i].innerHTML = '多点传播速率 (Multicast)';
					break;
				case 'Preamble':
					Tomato_AdvancedWireless[i].innerHTML = '前导讯号 (Preamble)';
					break;
				case '802.11n Preamble':
					Tomato_AdvancedWireless[i].innerHTML = '802.11n 前导讯号';
					break;
				case 'Overlapping BSS Coexistence':
					Tomato_AdvancedWireless[i].innerHTML = '重叠 BSS 共存';
					break;
				case 'RTS Threshold':
					Tomato_AdvancedWireless[i].innerHTML = 'RTS 门槛';
					break;
				case 'Receive Antenna':
					Tomato_AdvancedWireless[i].innerHTML = '接收天线';
					break;
				case 'Transmit Antenna':
					Tomato_AdvancedWireless[i].innerHTML = '发射天线';
					break;
				case 'Transmit Power':
					Tomato_AdvancedWireless[i].innerHTML = '发射功率';
					break;
				case 'Transmission Rate':
					Tomato_AdvancedWireless[i].innerHTML = '传输速率';
					break;
				case 'Interference Mitigation':
					Tomato_AdvancedWireless[i].innerHTML = '干扰抑制';
					break;
				case 'WMM':
					Tomato_AdvancedWireless[i].innerHTML = '无线多媒体 (WMM)';
					break;
				case 'No ACK':
					Tomato_AdvancedWireless[i].innerHTML = '无双向确认 (No ACK)';
					break;
				case 'APSD Mode':
					Tomato_AdvancedWireless[i].innerHTML = '自动省电传输模式 (APSD)';
					break;
				case 'Wireless Multicast Forwarding':
					Tomato_AdvancedWireless[i].innerHTML = '无线网络多点传播转发 (Multicast)';
					break;
			}
		}
		
		Tomato_AdvancedWireless = document.getElementById('_wl0_obss_coex').childNodes;
		Tomato_AdvancedWireless[1].innerHTML = '启用';
		
		var words = {
			'Wireless Settings' : '无线网络设置',
			'Enable' : '启用',
			'Disable' : '停用',
			'Default' : '默认',
			'All' : '全部',
			'Off' : '关闭',
			'TAIWAN, PROVINCE OF CHINA' : '台湾',
			'Preemption' : '抢占',
			'range' : '范围',
			'meters' : '公尺',
			'use default' : '使用默认值',
			'Long' : '长',
			'Short' : '短',
			'Mixed Mode' : '混合模式',
			'actual max depends on Country selected; use 0 for hardware default' : '最大值取决于所选择的国家；0 为硬体默认值',
			'None' : '停用',
			'Non-WLAN' : '其它干扰抑制',
			'WLAN Manual' : '无线干扰手动抑制',
			'WLAN Auto with Noise Reduction' : '无线干扰自动抑制并减少杂讯',
			'WLAN Auto' : '无线干扰自动抑制',
			'The default settings are indicated with an asterisk' : '默认的设置值会以星号',
			'symbol.' : '标记在设置值的后方。',
			'default' : '默认值',
			'Auto' : '自动',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 连接端口转发的基本设置页面
	// ===============================================================
	if (TomatoPage == 'forward-basic.asp') {
		Tomato_ForwardBasic = document.getElementsByClassName('section-title');
		Tomato_ForwardBasic[0].innerHTML = '连接端口转发设置 (Port Forwarding)';
		
		Tomato_ForwardBasic = document.getElementsByClassName('co1');
		Tomato_ForwardBasic[0].innerHTML = '启用';
		Tomato_ForwardBasic = document.getElementsByClassName('co2');
		Tomato_ForwardBasic[0].innerHTML = '通讯协定';
		Tomato_ForwardBasic = document.getElementsByClassName('co3');
		Tomato_ForwardBasic[0].innerHTML = '来源地址';
		Tomato_ForwardBasic = document.getElementsByClassName('co4');
		Tomato_ForwardBasic[0].innerHTML = '外部端口';
		Tomato_ForwardBasic = document.getElementsByClassName('co5');
		Tomato_ForwardBasic[0].innerHTML = '内部端口';
		Tomato_ForwardBasic = document.getElementsByClassName('co6');
		Tomato_ForwardBasic[0].innerHTML = '内部地址';
		Tomato_ForwardBasic = document.getElementsByClassName('co7');
		Tomato_ForwardBasic[0].innerHTML = '描述';
		
		var words = {
			'Src Address' : '来源地址',
			'optional' : '可选填',
			'Forward only if from this address. Ex: "1.2.3.4", "1.2.3.4 - 2.3.4.5", "1.2.3.0/24", "me.example.com".' : '限制仅在来源地址是来自于所设置的地址时才启用连接端口转发, 地址可为单一地址或范围, 空白为不限制来源地址。例如: "1.2.3.4", "1.2.3.4 - 2.3.4.5", "1.2.3.0/24", "me.example.com"。',
			'Ext Ports' : '外部端口',
			'The ports to be forwarded, as seen from the WAN. Ex: "2345", "200,300", "200-300,400".' : '指定从广域网连入时所须启用转发的连接端口端口, 端口可为单一端口或范围。例如: "2345", "200,300", "200-300,400"。',
			'Int Port' : '内部端口',
			'The destination port inside the LAN. If blank, the destination port' : '指定要转发到区域网络内的目的端口。如果空白, 转发后的内部端口',
			'is the same as' : '将会与',
			'. Only one port per entry is supported when forwarding to a different internal' : '相同。如要将外部端口转发到不同的内部端口, 外部端口的值不能设置成端口范围, 因目前仅支援从外部单一端口转发到指定的内部单一端口',
			'port.' : '。',
			'Int Address' : '内部地址',
			'The destination address inside the LAN.' : '指定要转发到区域网络内的目的地址。',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 连接端口转发的 IPv6 基本设置页面
	// ===============================================================
	if (TomatoPage == 'forward-basic-ipv6.asp') {
		Tomato_ForwardBasicIpv6 = document.getElementsByClassName('section-title');
		Tomato_ForwardBasicIpv6[0].innerHTML = 'IPv6 连接端口转发设置 (IPv6 Port Forwarding)';
		
		Tomato_ForwardBasicIpv6 = document.getElementsByClassName('co1');
		Tomato_ForwardBasicIpv6[0].innerHTML = '启用';
		Tomato_ForwardBasicIpv6 = document.getElementsByClassName('co2');
		Tomato_ForwardBasicIpv6[0].innerHTML = '通讯协定';
		Tomato_ForwardBasicIpv6 = document.getElementsByClassName('co3');
		Tomato_ForwardBasicIpv6[0].innerHTML = '来源地址';
		Tomato_ForwardBasicIpv6 = document.getElementsByClassName('co4');
		Tomato_ForwardBasicIpv6[0].innerHTML = '目的地址';
		Tomato_ForwardBasicIpv6 = document.getElementsByClassName('co5');
		Tomato_ForwardBasicIpv6[0].innerHTML = '目的端口';
		Tomato_ForwardBasicIpv6 = document.getElementsByClassName('co6');
		Tomato_ForwardBasicIpv6[0].innerHTML = '描述';
		
		var words = {
			'Opens access to ports on machines inside the LAN, but does ' : '仅是开放存取区域网络内部机器的连接端口, 并',
			'not' : '不会',
			' re-map ports.' : '重新映射连接端口。',
			'Src Address' : '来源地址',
			'optional' : '可选填',
			'Forward only if from this address. Ex: "2001:4860:800b::/48", "me.example.com".' : '限制仅在来源地址是来自于所设置的地址时才启用连接端口转发, 地址可为单一地址或范围, 空白为不限制来源地址。例如: "2001:4860:800b::/48", "me.example.com"。',
			'Dest Address' : '目的地址',
			'The destination address inside the LAN.' : '指定要转发至区域网络内的目的地址。',
			'Dest Ports' : '目的端口',
			'The ports to be opened for forwarding. Ex: "2345", "200,300", "200-300,400".' : '指定要为转发而开放存取的端口。例如: "2345", "200,300", "200-300,400"。',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 连接端口转发的 DMZ 隔离区页面
	// ===============================================================
	if (TomatoPage == 'forward-dmz.asp') {
		Tomato_ForwardDmz = document.getElementsByClassName('section-title');
		Tomato_ForwardDmz[0].innerHTML = 'DMZ 隔离区';
		
		Tomato_ForwardDmz = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_ForwardDmz.length > i ; i++) {
			switch(Tomato_ForwardDmz[i].innerHTML) {
				case 'Enable DMZ':
					Tomato_ForwardDmz[i].innerHTML = '启用 DMZ 隔离区';
					break;
				case 'Destination Address':
					Tomato_ForwardDmz[i].innerHTML = '目的地址';
					break;
				case 'Destination Interface':
					Tomato_ForwardDmz[i].innerHTML = '目的界面';
					break;
				case 'Source Address<br>Restriction':
					Tomato_ForwardDmz[i].innerHTML = '来源地址限制';
					break;
				case 'Leave Remote Access':
					Tomato_ForwardDmz[i].innerHTML = '保留远端存取';
					break;
			}
		}
		
		var words = {
			'optional; ex: "1.1.1.1", "1.1.1.0/24", "1.1.1.1 - 2.2.2.2" or "me.example.com"' : '可选填; 例如: "1.1.1.1", "1.1.1.0/24", "1.1.1.1 - 2.2.2.2" 或 "me.example.com"',
			'Redirect remote access ports for SSH and HTTP(s) to router' : '将 SSH 及 HTTP(s) 的远端存取连接端口重新导向到路由器',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 连接端口转发的触发式转发页面
	// ===============================================================
	if (TomatoPage == 'forward-triggered.asp') {
		Tomato_ForwardTriggered = document.getElementsByClassName('section-title');
		Tomato_ForwardTriggered[0].innerHTML = '触发式连接端口转发 (Triggered Port Forwarding)';
		
		Tomato_ForwardTriggered = document.getElementsByClassName('co1');
		Tomato_ForwardTriggered[0].innerHTML = '启用';
		Tomato_ForwardTriggered = document.getElementsByClassName('co2');
		Tomato_ForwardTriggered[0].innerHTML = '通讯协定';
		Tomato_ForwardTriggered = document.getElementsByClassName('co3');
		Tomato_ForwardTriggered[0].innerHTML = '触发端口';
		Tomato_ForwardTriggered = document.getElementsByClassName('co4');
		Tomato_ForwardTriggered[0].innerHTML = '转发端口';
		Tomato_ForwardTriggered = document.getElementsByClassName('co5');
		Tomato_ForwardTriggered[0].innerHTML = '描述';
		
		var words = {
			'Use "-" to specify a range of ports (200-300).' : '使用 "-" 可指定连接端口范围 (例如: 200-300)。',
			'Trigger Ports are the initial LAN to WAN "trigger".' : '若区域网络内的装置向外连接时, 有使用到触发端口里的连接端口, 即会启动 "触发" 状态。',
			'Forwarded Ports are the WAN to LAN ports that are opened if the "trigger" is activated.' : '若 "触发" 状态已启动, 转发端口将会暂时开放, 以让广域网能够传入连接。',
			'These ports are automatically closed after a few minutes of inactivity.' : '被开放的转发连接端口会在闲置数分钟后自动关闭。',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 连接端口转发的通用随插即用设置页面
	// ===============================================================
	if (TomatoPage == 'forward-upnp.asp') {
		Tomato_ForwardUpnp = document.getElementsByClassName('section-title');
		Tomato_ForwardUpnp[0].innerHTML = '通用随插即用转发连接端口 (UPnP/NAT-PMP Forwarded Ports)';
		Tomato_ForwardUpnp[1].innerHTML = '设置';
		
		Tomato_ForwardUpnp = document.getElementsByClassName('co1');
		Tomato_ForwardUpnp[0].innerHTML = '外部';
		Tomato_ForwardUpnp = document.getElementsByClassName('co2');
		Tomato_ForwardUpnp[0].innerHTML = '内部';
		Tomato_ForwardUpnp = document.getElementsByClassName('co3');
		Tomato_ForwardUpnp[0].innerHTML = '内部地址';
		Tomato_ForwardUpnp = document.getElementsByClassName('co4');
		Tomato_ForwardUpnp[0].innerHTML = '通讯协定';
		Tomato_ForwardUpnp = document.getElementsByClassName('co5');
		Tomato_ForwardUpnp[0].innerHTML = '描述';
		
		Tomato_ForwardUpnp = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_ForwardUpnp.length > i ; i++) {
			switch(Tomato_ForwardUpnp[i].innerHTML) {
				case 'Enable UPnP':
					Tomato_ForwardUpnp[i].innerHTML = '启用 UPnP';
					break;
				case 'Enable NAT-PMP':
					Tomato_ForwardUpnp[i].innerHTML = '启用 NAT-PMP';
					break;
				case 'Inactive Rules Cleaning':
					Tomato_ForwardUpnp[i].innerHTML = '清除闲置的规则';
					break;
				case 'Cleaning Interval':
					Tomato_ForwardUpnp[i].innerHTML = '清除间隔';
					break;
				case 'Cleaning Threshold':
					Tomato_ForwardUpnp[i].innerHTML = '清除门槛';
					break;
				case 'Secure Mode':
					Tomato_ForwardUpnp[i].innerHTML = '安全模式';
					break;
				case 'Listen on':
					Tomato_ForwardUpnp[i].innerHTML = '监听界面';
					break;
				case 'Show In My Network Places':
					Tomato_ForwardUpnp[i].innerHTML = '显示在网络芳邻';
					break;
				case 'Miniupnpd<br>Custom configuration':
					Tomato_ForwardUpnp[i].innerHTML = 'Miniupnpd<br>自定义设置';
					break;
			}
		}
		var words = {
			'redirections' : '转向次数',
			'when enabled, UPnP clients are allowed to add mappings only to their IP' : '当启用安全模式时, UPnP 用户端将会被允许加入映射到它们的 IP',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 连接管制相关页面
	// ===============================================================
	if (TomatoPage == 'restrict.asp' || TomatoPage == 'restrict-edit.asp') {
		switch(TomatoPage) {
			case 'restrict.asp':
				Tomato_Restrict = document.getElementsByClassName('section-title');
				Tomato_Restrict[0].innerHTML = '连接管制时程表';
				
				Tomato_Restrict = document.getElementsByClassName('co1');
				Tomato_Restrict[0].innerHTML = '描述';
				Tomato_Restrict = document.getElementsByClassName('co2');
				Tomato_Restrict[0].innerHTML = '时程';
				break;
			case 'restrict-edit.asp':
				Tomato_Restrict = document.getElementsByClassName('section-title');
				Tomato_Restrict[0].innerHTML = '连接管制时程设置';
				
				Tomato_Restrict = document.getElementsByClassName('co1');
				for (var i = 0 ; Tomato_Restrict.length > i ; i++) {
					switch(Tomato_Restrict[i].innerHTML) {
						case 'Rules':
							Tomato_Restrict[i].innerHTML = '规则';
							break;
						case 'MAC / IP Address':
							Tomato_Restrict[i].innerHTML = 'MAC / IP 地址';
							break;
					}
				}
				
				Tomato_Restrict = document.getElementsByTagName('label');
				for (var i = 0 ; Tomato_Restrict.length > i ; i++) {
					switch(Tomato_Restrict[i].innerHTML) {
						case 'Enabled':
							Tomato_Restrict[i].innerHTML = '启用';
							break;
						case 'Description':
							Tomato_Restrict[i].innerHTML = '描述';
							break;
						case 'Schedule':
							Tomato_Restrict[i].innerHTML = '时程';
							break;
						case 'Time':
							Tomato_Restrict[i].innerHTML = '时间';
							break;
						case 'Days':
							Tomato_Restrict[i].innerHTML = '天数';
							break;
						case 'Type':
							Tomato_Restrict[i].innerHTML = '管制类型';
							break;
						case 'Applies To':
							Tomato_Restrict[i].innerHTML = '适用对象';
							break;
						case 'Blocked Resources':
							Tomato_Restrict[i].innerHTML = '封锁的连接资源';
							break;
						case 'HTTP Request':
							Tomato_Restrict[i].innerHTML = 'HTTP 连接请求';
							break;
						case 'HTTP Requested Files':
							Tomato_Restrict[i].innerHTML = 'HTTP 档案请求';
							break;
					}
				}
				
				Tomato_Restrict = document.getElementsByClassName('title indent2');
				for (var i = 0 ; Tomato_Restrict.length > i ; i++) {
					switch(Tomato_Restrict[i].innerHTML) {
						case 'Port /<br>Application':
							Tomato_Restrict[i].innerHTML = '连接端口 / 应用程式';
							break;
						case 'MAC / IP Address':
							Tomato_Restrict[i].innerHTML = 'MAC / IP 地址';
							break;
					}
				}
				break;
		}
		
		var words = {
			'Everyday' : '每天',
			'Sun' : '周日',
			'Mon' : '周一',
			'Tue' : '周二',
			'Wed' : '周三',
			'Thu' : '周四',
			'Fri' : '周五',
			'Sat' : '周六',
			' to ' : ' 至 ',
			'the following day' : '第二天',
			'Disabled' : '已停用',
			'All Day' : '整天',
			'Normal Access Restriction' : '一般连接管制',
			'Disable Wireless' : '关闭无线网络',
			'All Computers / Devices' : '所有的电脑 / 装置',
			'The Following...' : '以下列表...',
			'All Except...' : '排除以下列表...',
			'Block All Internet Access' : '封锁所有的网际网络连接',
			'Any Protocol' : '不限通讯协定',
			'Any Port' : '不限连接端口',
			'Dst Port' : '目的连接端口',
			'Src Port' : '来源连接端口',
			'Src or Dst' : '来源或目的连接端口',
			'IPP2P (disabled)' : 'IPP2P (停用)',
			'All IPP2P Filters' : 'IPP2P 全部过滤',
			'Layer 7 (disabled)' : 'Layer 7 (停用)',
			'Any Address' : '不限地址',
			'Dst IP' : '目的 IP',
			'Src IP' : '来源 IP',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 网络品质管理的基本设置页面
	// ===============================================================
	if (TomatoPage == 'qos-settings.asp') {
		Tomato_QosSettings = document.getElementsByClassName('section-title');
		Tomato_QosSettings[0].innerHTML = '基本设置';
		Tomato_QosSettings[1].innerHTML = '仅用于 DSL 的设置';
		Tomato_QosSettings[2].innerHTML = '上传速率 / 限制';
		Tomato_QosSettings[3].innerHTML = '下载速率 / 限制';
		Tomato_QosSettings[5].innerHTML = 'TCP Vegas (网络拥塞控制)';
		
		Tomato_Restrict = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_Restrict.length > i ; i++) {
			switch(Tomato_Restrict[i].innerHTML) {
				case 'Enable QoS':
					Tomato_Restrict[i].innerHTML = '启用网络品质管理 (QoS)';
					break;
				case 'Prioritize small packets with these control flags':
					Tomato_Restrict[i].innerHTML = 'TCP 控制标志封包优先';
					break;
				case 'Prioritize ICMP':
					Tomato_Restrict[i].innerHTML = 'ICMP 协定优先';
					break;
				case 'No Ingress QOS for UDP':
					Tomato_Restrict[i].innerHTML = 'UDP 连接不排入 QoS 伫列';
					break;
				case 'Reset class when changing settings':
					Tomato_Restrict[i].innerHTML = '变更设置时重置分级';
					break;
				case 'Default class':
					Tomato_Restrict[i].innerHTML = '默认分级';
					break;
				case 'Qdisc Scheduler':
					Tomato_Restrict[i].innerHTML = '伫列规则调度器 (Qdisc)';
					break;
				case 'DSL Overhead Value - ATM Encapsulation Type':
					Tomato_Restrict[i].innerHTML = 'DSL 覆改值 - ATM 封装类型';
					break;
				case 'Max Bandwidth Limit':
					Tomato_Restrict[i].innerHTML = '最大带宽限制';
					break;
				case 'Enable TCP Vegas':
					Tomato_Restrict[i].innerHTML = '启用 TCP Vegas';
					break;
			}
		}
		
		var words = {
			'QOS Class Names' : 'QoS 分级名称',
			'Toggle Visibility' : '显示/隐藏细节',
			'None' : '无',
			'Set to measured bandwidth less 15-30%' : '建议最好将值设置在低于你使用带宽的 15-30%',
			'No Limit' : '不限制',
			'Maximum 10 characters, no spaces' : '最大 10 个字元, 不允许空格、空白或中文名称, 想以中文来显示名称的话, 请保持默认',
			'Priority Class' : '优先等级',
			'Service' : '网络服务',
			'VOIP/Game' :'网络电话/游戏',
			'Media' : '网络多媒体',
			'Remote' : '远端连接',
			'WWW' : '网页',
			'Mail' : '电子邮件',
			'Messenger' : '即时通讯',
			'FileXfer' : '档案传输',
			'P2P/Bulk' : 'P2P/大量传输',
			'Crawl' : '其它/限速',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 网络品质管理的分级管制页面
	// ===============================================================
	if (TomatoPage == 'qos-classify.asp') {
		Tomato_QosClassify = document.getElementsByClassName('section-title');
		Tomato_QosClassify[0].innerHTML = '对外传输分级管制';
		
		Tomato_QosClassify = document.getElementsByClassName('co1');
		Tomato_QosClassify[0].innerHTML = '符合规则';
		
		Tomato_QosClassify = document.getElementsByClassName('co2');
		for (var i = 0 ; Tomato_QosClassify.length > i ; i++) {
			switch(Tomato_QosClassify[i].innerHTML) {
				case 'Class':
					Tomato_QosClassify[i].innerHTML = '级别';
					break;
				case 'Disabled':
					Tomato_QosClassify[i].innerHTML = '不分级别';
					break;
				case 'Service':
					Tomato_QosClassify[i].innerHTML = '网络服务';
					break;
				case 'VOIP/Game':
					Tomato_QosClassify[i].innerHTML = '网络电话<br>网络游戏';
					break;
				case 'Media':
					Tomato_QosClassify[i].innerHTML = '网络多媒体';
					break;
				case 'Remote':
					Tomato_QosClassify[i].innerHTML = '远端连接';
					break;
				case 'WWW':
					Tomato_QosClassify[i].innerHTML = '网页';
					break;
				case 'Mail':
					Tomato_QosClassify[i].innerHTML = '电子邮件';
					break;
				case 'Messenger':
					Tomato_QosClassify[i].innerHTML = '即时通讯';
					break;
				case 'FileXfer':
					Tomato_QosClassify[i].innerHTML = '档案传输';
					break;
				case 'P2P/Bulk':
					Tomato_QosClassify[i].innerHTML = 'P2P 传输<br>大量传输';
					break;
				case 'Crawl':
					Tomato_QosClassify[i].innerHTML = '其它/限速';
					break;
			}
		}
		
		Tomato_QosClassify = document.getElementsByClassName('co3');
		Tomato_QosClassify[0].innerHTML = '描述';
		
		Tomato_QosClassify = document.getElementById('_[object HTMLTableElement]_12').childNodes;
		for (var i = 0 ; Tomato_QosClassify.length > i ; i++) {
			switch(Tomato_QosClassify[i].innerHTML) {
				case 'Disabled':
					Tomato_QosClassify[i].innerHTML = '不分级别';
					break;
				case 'Service':
					Tomato_QosClassify[i].innerHTML = '网络服务';
					break;
				case 'VOIP/Game':
					Tomato_QosClassify[i].innerHTML = '网络电话/游戏';
					break;
				case 'Media':
					Tomato_QosClassify[i].innerHTML = '网络多媒体';
					break;
				case 'Remote':
					Tomato_QosClassify[i].innerHTML = '远端连接';
					break;
				case 'WWW':
					Tomato_QosClassify[i].innerHTML = '网页';
					break;
				case 'Mail':
					Tomato_QosClassify[i].innerHTML = '电子邮件';
					break;
				case 'Messenger':
					Tomato_QosClassify[i].innerHTML = '即时通讯';
					break;
				case 'FileXfer':
					Tomato_QosClassify[i].innerHTML = '档案传输';
					break;
				case 'P2P/Bulk':
					Tomato_QosClassify[i].innerHTML = 'P2P/大量传输';
					break;
				case 'Crawl':
					Tomato_QosClassify[i].innerHTML = '其它/限速';
					break;
			}
		}
		
		var words = {
			'Any Address' : '不限地址',
			'Dst IP' : '目的 IP',
			'Src IP' : '来源 IP',
			'Src MAC' : '来源 MAC',
			'Any Protocol' : '不限通讯协定',
			'Any Port' : '不限连接端口',
			'Dst Port' : '目的连接端口',
			'Src Port' : '来源连接端口',
			'Src or Dst' : '来源或目的连接端口',
			'IPP2P (disabled)' : 'IPP2P (停用)',
			'All IPP2P filters' : 'IPP2P 全部过滤',
			'Layer 7 (disabled)' : 'Layer 7 (停用)',
			'DSCP (any)' : 'DSCP (不限)',
			'DSCP value' : 'DSCP 数值 (自定义)',
			'KB Transferred' : 'KB 传送流量',
			'Port:' : '连接端口:',
			'Transferred:' : '传送流量:',
			'QoS disabled.' : 'QoS 目前已停用。',
			'Enable »' : '启用 »',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 网络品质管理的图表分析页面
	// ===============================================================
	if (TomatoPage == 'qos-graphs.asp') {
		Tomato_QosGraphs = document.getElementsByClassName('section-title');
		Tomato_QosGraphs[0].innerHTML = '连接分布图';
		Tomato_QosGraphs[1].innerHTML = '带宽分布图 (上传)';
		Tomato_QosGraphs[2].innerHTML = '带宽分布图 (下载)';
		
		Tomato_QosGraphs = document.getElementsByClassName('title');
		for (var i = 0 ; Tomato_QosGraphs.length > i ; i++) {
			switch(Tomato_QosGraphs[i].style.width) {
				case '45px':
					Tomato_QosGraphs[i].style.width = '70px';
					break;
			}
		}
		
		Tomato_QosGraphs = document.getElementsByTagName('a');
		for (var i = 0 ; Tomato_QosGraphs.length > i ; i++) {
			switch(Tomato_QosGraphs[i].innerHTML) {
				case 'Unclassified':
					Tomato_QosGraphs[i].innerHTML = '未有级别';
					break;
				case 'Service':
					Tomato_QosGraphs[i].innerHTML = '网络服务';
					break;
				case 'VOIP/Game':
					Tomato_QosGraphs[i].innerHTML = '网络电话<br>网络游戏';
					break;
				case 'Media':
					Tomato_QosGraphs[i].innerHTML = '网络多媒体';
					break;
				case 'Remote':
					Tomato_QosGraphs[i].innerHTML = '远端连接';
					break;
				case 'WWW':
					Tomato_QosGraphs[i].innerHTML = '网页';
					break;
				case 'Mail':
					Tomato_QosGraphs[i].innerHTML = '电子邮件';
					break;
				case 'Messenger':
					Tomato_QosGraphs[i].innerHTML = '即时通讯';
					break;
				case 'FileXfer':
					Tomato_QosGraphs[i].innerHTML = '档案传输';
					break;
				case 'P2P/Bulk':
					Tomato_QosGraphs[i].innerHTML = 'P2P 传输 <br>大量传输';
					break;
				case 'Crawl':
					Tomato_QosGraphs[i].innerHTML = '其它/限速';
					break;
			}
		}
		
		Tomato_QosGraphs = document.getElementsByClassName('total');
		for (var i = 0 ; Tomato_QosGraphs.length > i ; i++) {
			switch(Tomato_QosGraphs[i].innerHTML) {
				case 'Total':
					Tomato_QosGraphs[i].innerHTML = '合计';
					break;
			}
		}
		
		Tomato_QosGraphs = document.getElementsByClassName('thead pct');
		Tomato_QosGraphs[0].innerHTML = '比例';
		Tomato_QosGraphs[1].innerHTML = '比例';
		
		var words = {
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 网络品质管理的连接列表页面
	// ===============================================================
	if (TomatoPage == 'qos-detailed.asp') {
		
		Tomato_QosDetailed = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_QosDetailed.length > i ; i++) {
			switch(Tomato_QosDetailed[i].innerHTML) {
				case 'Show only these IPs':
					Tomato_QosDetailed[i].innerHTML = '显示这些 IP 地址';
					break;
				case 'Exclude these IPs':
					Tomato_QosDetailed[i].innerHTML = '排除这些 IP 地址';
					break;
				case 'Exclude gateway traffic':
					Tomato_QosDetailed[i].innerHTML = '排除网关器流量';
					break;
				case 'Exclude IPv4 broadcast':
					Tomato_QosDetailed[i].innerHTML = '排除 IPv4 广播';
					break;
				case 'Exclude IPv4 multicast':
					Tomato_QosDetailed[i].innerHTML = '排除 IPv4 多点传播';
					break;
				case 'Auto resolve addresses':
					Tomato_QosDetailed[i].innerHTML = '自动解析地址';
					break;
				case 'Show shortcuts':
					Tomato_QosDetailed[i].innerHTML = '显示功能快捷';
					break;
			}
		}
		
		var words = {
			'View Details' : '连接列表详细信息',
			'connections' : '连接数',
			'showing' : '显示',
			'out of' : '/',
			'resolve' : '解析',
			'Filters' : '过滤条件',
			'Toggle Visibility' : '显示/隐藏细节',
			'Click here to hide' : '隐藏细节',
			'Click here to show' : '显示细节',
			'hide': '隐藏',
			'Comma separated list' : '请以逗号分隔 IP 地址',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		
		var f = unsafeWindow.verifyFields;
		unsafeWindow.verifyFields = function() {
			f();
			setTimeout(ReplaceQos, 600);
			setTimeout(RefreshPage, 600);
		}
		
		Replaceword();
		setTimeout(ReplaceQos, 600);
		setTimeout(RefreshPage, 600);
	}


	// Tomato 网络品质管理的传输速率页面
	// ===============================================================
	if (TomatoPage == 'qos-ctrate.asp') {
		
		Tomato_QosCtrate = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_QosCtrate.length > i ; i++) {
			switch(Tomato_QosCtrate[i].innerHTML) {
				case 'Show only these IPs':
					Tomato_QosCtrate[i].innerHTML = '显示这些 IP 地址';
					break;
				case 'Exclude these IPs':
					Tomato_QosCtrate[i].innerHTML = '排除这些 IP 地址';
					break;
				case 'Exclude gateway traffic':
					Tomato_QosCtrate[i].innerHTML = '排除网关器流量';
					break;
				case 'Exclude IPv4 broadcast':
					Tomato_QosCtrate[i].innerHTML = '排除 IPv4 广播';
					break;
				case 'Exclude IPv4 multicast':
					Tomato_QosCtrate[i].innerHTML = '排除 IPv4 多点传播';
					break;
				case 'Ignore inactive connections':
					Tomato_QosCtrate[i].innerHTML = '忽略停止传输的连接';
					break;
				case 'Auto resolve addresses':
					Tomato_QosCtrate[i].innerHTML = '自动解析地址';
					break;
				case 'Show shortcuts':
					Tomato_QosCtrate[i].innerHTML = '显示功能快捷';
					break;
			}
		}
		
		var words = {
			'Transfer Rates' : '传输速率',
			'connections' : '连接数',
			'showing' : '显示',
			'out of' : '/',
			'resolve' : '解析',
			'Filters' : '过滤条件',
			'Toggle Visibility' : '显示/隐藏细节',
			'Click here to hide' : '隐藏细节',
			'Click here to show' : '显示细节',
			'hide': '隐藏',
			'Comma separated list' : '请以逗号分隔 IP 地址',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		
		var f = unsafeWindow.verifyFields;
		unsafeWindow.verifyFields = function() {
			f();
			setTimeout(ReplaceQos, 2400);
			setTimeout(RefreshPage, 2400);
		}
		
		Replaceword();
		setTimeout(ReplaceQos, 2400);
		setTimeout(RefreshPage, 2400);
	}


	// Tomato 带宽限制设置页面
	// ===============================================================
	if (TomatoPage == 'bwlimit.asp') {
		Tomato_Bwlimit = document.getElementsByClassName('section-title');
		Tomato_Bwlimit[0].innerHTML = 'LAN (br0) 带宽限制';
		Tomato_Bwlimit[1].innerHTML = 'LAN (br0) 默认带宽限制 (未列在 MAC / IP 地址清单里的默认带宽限制)';
		Tomato_Bwlimit[2].innerHTML = 'LAN1 (br1) 默认带宽限制';
		Tomato_Bwlimit[3].innerHTML = 'LAN2 (br2) 默认带宽限制';
		Tomato_Bwlimit[4].innerHTML = 'LAN3 (br3) 默认带宽限制';
		
		Tomato_Bwlimit = document.getElementsByClassName('co1');
		Tomato_Bwlimit[0].innerHTML = 'IP 地址 | IP 范围 | MAC 地址';
		Tomato_Bwlimit = document.getElementsByClassName('co2');
		Tomato_Bwlimit[0].innerHTML = '下载保证带宽';
		Tomato_Bwlimit = document.getElementsByClassName('co3');
		Tomato_Bwlimit[0].innerHTML = '下载最大带宽';
		Tomato_Bwlimit = document.getElementsByClassName('co4');
		Tomato_Bwlimit[0].innerHTML = '上传保证带宽';
		Tomato_Bwlimit = document.getElementsByClassName('co5');
		Tomato_Bwlimit[0].innerHTML = '上传最大带宽';
		Tomato_Bwlimit = document.getElementsByClassName('co6');
		Tomato_Bwlimit[0].innerHTML = '优先等级';
		Tomato_Bwlimit = document.getElementsByClassName('co7');
		Tomato_Bwlimit[0].innerHTML = 'TCP 限制';
		Tomato_Bwlimit = document.getElementsByClassName('co8');
		Tomato_Bwlimit[0].innerHTML = 'UDP 限制';
		
		Tomato_Bwlimit = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_Bwlimit.length > i ; i++) {
			switch(Tomato_Bwlimit[i].innerHTML) {
				case 'Enable Limiter':
					Tomato_Bwlimit[i].innerHTML = '启用带宽限制';
					break;
				case 'Enable':
					Tomato_Bwlimit[i].innerHTML = '启用';
					break;
				case 'Download rate':
					Tomato_Bwlimit[i].innerHTML = '下载保证带宽';
					break;
				case 'Download ceil':
					Tomato_Bwlimit[i].innerHTML = '下载最大带宽';
					break;
				case 'Upload rate':
					Tomato_Bwlimit[i].innerHTML = '上传保证带宽';
					break;
				case 'Upload ceil':
					Tomato_Bwlimit[i].innerHTML = '上传最大带宽';
					break;
				case 'TCP Limit':
					Tomato_Bwlimit[i].innerHTML = 'TCP 限制';
					break;
				case 'UDP limit':
					Tomato_Bwlimit[i].innerHTML = 'UDP 限制';
					break;
				case 'Priority':
					Tomato_Bwlimit[i].innerHTML = '优先等级';
					break;
			}
		}
		
		var words = {
			'Max Available Download' :'最大可用下载带宽',
			'Max Available Upload' :'最大可用上传带宽',
			'same as used in QoS' : '与 QoS 使用的相同',
			'Highest' : '最高',
			'High' : '高',
			'Normal' : '标准',
			'Lowest' : '最低',
			'Low' : '低',
			'nolimit' : '不限制',
			'IP Address / IP Range' : 'IP 地址 / IP 范围',
			'Example: 192.168.1.5 for one IP.' : '例如: 192.168.1.5 为单一 IP 地址',
			'Example: 192.168.1.4-7 for IP 192.168.1.4 to 192.168.1.7' : '例如: 192.168.1.4-7 为 IP 192.168.1.4 到 192.168.1.7',
			'Example: 4-7 for IP Range .4 to .7' : '上例中 4-7 代表 IP 范围 .4 到 .7',
			'The IP Range devices will share the Bandwidth' : 'IP 范围里的装置将共享所设置的带宽',
			'MAC Address' : 'MAC 地址',
			'Example: 00:2E:3C:6A:22:D8' : '例如: 00:2E:3C:6A:22:D8',
			'no limit' : '不限制',
			'Default Class' : '默认带宽限制',
			"IP / MAC's non included in the list will take the Default Rate/Ceiling setting" : '所有未列在上方 LAN (br0) 带宽限制清单里的 IP / MAC 地址将使用这个默认的带宽限制设置。',
			'The bandwitdh will be shared by all unlisted hosts in br0' : '所有未列在上方 LAN (br0) 带宽限制清单里的主机将共享在此所设置的带宽。',
			'The bandwitdh will be shared by all hosts in br1.' : '所有在 LAN (br1) 的主机将共享在此所设置的带宽。',
			'The bandwitdh will be shared by all hosts in br2.' : '所有在 LAN (br2) 的主机将共享在此所设置的带宽。',
			'The bandwitdh will be shared by all hosts in br3.' : '所有在 LAN (br3) 的主机将共享在此所设置的带宽。',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 网页认证设置页面
	// ===============================================================
	if (TomatoPage == 'splashd.asp') {
		Tomato_Splashd = document.getElementsByClassName('section-title');
		Tomato_Splashd[0].innerHTML = '网页认证管理';
		Tomato_Splashd[1].innerHTML = '自定义认证网页档案路径';
		
		Tomato_Splashd = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_Splashd.length > i ; i++) {
			switch(Tomato_Splashd[i].innerHTML) {
				case 'Enable Function':
					Tomato_Splashd[i].innerHTML = '启用网页认证功能';
					break;
				case 'Interface':
					Tomato_Splashd[i].innerHTML = '网络界面';
					break;
				case 'Gateway Name':
					Tomato_Splashd[i].innerHTML = '网关器名称';
					break;
				case 'Captive Site Forwarding':
					Tomato_Splashd[i].innerHTML = '认证网站转发';
					break;
				case 'Home Page':
					Tomato_Splashd[i].innerHTML = '转发网址';
					break;
				case 'Welcome html Path':
					Tomato_Splashd[i].innerHTML = '欢迎页面路径';
					break;
				case 'Logged Timeout':
					Tomato_Splashd[i].innerHTML = '登入超时';
					break;
				case 'Idle Timeout':
					Tomato_Splashd[i].innerHTML = '闲置超时';
					break;
				case 'Max Missed ARP':
					Tomato_Splashd[i].innerHTML = '最大 ARP 遗失数量';
					break;
				case 'Log Info Level':
					Tomato_Splashd[i].innerHTML = '日志信息层级';
					break;
				case 'Gateway Port':
					Tomato_Splashd[i].innerHTML = '网关器连接端口';
					break;
				case 'Excluded Ports to be redirected':
					Tomato_Splashd[i].innerHTML = '排除重新导向的连接端口';
					break;
				case 'Included Ports to be redirected':
					Tomato_Splashd[i].innerHTML = '需要重新导向的连接端口';
					break;
				case 'URL Excluded off Captive Portal':
					Tomato_Splashd[i].innerHTML = '排除网页认证的网址';
					break;
				case 'MAC Address Whitelist':
					Tomato_Splashd[i].innerHTML = 'MAC 地址白名单';
					break;
			}
		}
		
		Tomato_Splashd = document.getElementsByTagName('b');
		for (var i = 0 ; Tomato_Splashd.length > i ; i++) {
			switch(Tomato_Splashd[i].innerHTML) {
				case 'Captive Portal. User Guide.':
					Tomato_Splashd[i].innerHTML = '网页认证 - 使用说明';
					break;
				case '*- Enable function:':
					Tomato_Splashd[i].innerHTML = '*- 启用网页认证功能:';
					break;
				case '*- Interface:':
					Tomato_Splashd[i].innerHTML = '*- 网络界面:';
					break;
				case '*- Gateway name:':
					Tomato_Splashd[i].innerHTML = '*- 网关器名称:';
					break;
				case '*- Captive Site Forwarding:':
					Tomato_Splashd[i].innerHTML = '*- 认证网站转发:';
					break;
				case '*- Home page:':
					Tomato_Splashd[i].innerHTML = '*- 转发网址:';
					break;
				case '*- Welcome html Path:':
					Tomato_Splashd[i].innerHTML = '*- 欢迎页面路径:';
					break;
				case '*- Logged Timeout:':
					Tomato_Splashd[i].innerHTML = '*- 登入超时:';
					break;
				case '*- Idle Timeout:':
					Tomato_Splashd[i].innerHTML = '*- 闲置超时:';
					break;
				case '*- Max Missed ARP:':
					Tomato_Splashd[i].innerHTML = '*- 最大 ARP 遗失数量:';
					break;
				case '*- Log Info Level:':
					Tomato_Splashd[i].innerHTML = '*- 日志信息层级:';
					break;
				case '*- Gateway Port:':
					Tomato_Splashd[i].innerHTML = '*- 网关器连接端口:';
					break;
				case '*- Excluded/Included ports to be redirected:':
					Tomato_Splashd[i].innerHTML = '*- 排除/需要重新导向的连接端口:';
					break;
				case '*- URL excluded off the portal:':
					Tomato_Splashd[i].innerHTML = '*- 排除网页认证的网址:';
					break;
				case '*- MAC address whitelist:':
					Tomato_Splashd[i].innerHTML = '*- MAC 地址白名单:';
					break;
				case '*- Customized Splash File Path:':
					Tomato_Splashd[i].innerHTML = '*- 自定义认证网页档案路径:';
					break;
			}
		}
		
		var words = {
			'0 - unlimited' : '0 - 不限制',
			'When you tick and save the router will show a Welcome Banner when a computer access the Internet.' : '当你在路由器核取此项目并储存后, 将会在装置存取网际网络时显示欢迎页面。',
			'Select one of the bridges on which Captive Portal will listen.' : '选择网页认证要监听的网络界面。',
			'The name of the Gateway appearing in the welcome banner' : '设置在欢迎页面所要显示的网关器名称。',
			"When active, the 'Home Page' (read next line) will appear after you Agree in Welcome Banner." : '当启用此项目时, 将会在欢迎页面按下同意后, 转发到下方的转发网址。',
			'The URL that will appear after you Agree the Welcome Banner.' : '设置在欢迎页面按下同意后所要转发的网址。',
			'The location where the Welcome banner is located' : '设置欢迎页面所在的路径地址。',
			'During this period of time no Welcome banner will appear when you access to the device. Default=3600 sec.(1 Hour).' : '设置当存取过装置后, 在所设置的时间周期内都不会再出现欢迎页面 (默认值 = 3600 秒 - 1 小时)。',
			"Expired time where you can't access the device again.Default value=0." : '设置无法再存取装置的闲置到期时间 (默认值 = 0 秒 - 不限制)。',
			'Number of lost ARP before considering the client has leaved the connection. Default = 5' : '设置用来考虑用户端已离线的 ARP 遗失数量 (默认值 = 5)。',
			'Messages from this module stored internally for better trace. Level 0=Silent, 10=Parrot, 2=Default.' : '设置此功能模组内部储存的讯息层级以利于追踪 (层级 0 = 无讯息, 10 = 重复讯息, 2 = 默认讯息)。',
			'Port to be used by the Captive Portal for page redirection. Port 1 to 65534. Default=5280.' : '设置重新导向到网页认证页面所要使用的连接端口 (连接端口 1 到 65534, 默认值 = 5280)。',
			'When setting any port (included or excluded) leave a blank space between each port number, i.e; 25 110 4662 4672. Use prefereable one of the two option to avoid conflicts.' : '设置多个连接端口时可用空格隔开每个连接端口号码, 例如: 25 110 4662 4672。设置时应避免同一连接端口同时被设在 (排除/需要) 选项以避免冲突。',
			"URL that will be accessed without Welcome banner screen appearing. When you set allowed url's also leave a blank space between each url. i.e; http://www.google.com http://www.google.es" : '设置存取时不会出现欢迎页面的网址。当设置多个网址时可用空格隔开每个网址, 例如: http://www.google.com http://www.google.es。',
			'MAC addresses excluded of the feature. Leave a blank space between each MAC Address, i.e; 11:22:33:44:55:66 11:22:33:44:55:67' : '设置要排除网页认证功能的 MAC 地址。设置多个 MAC 地址时可用空格隔开每个 MAC 地址, 例如: 11:22:33:44:55:66 11:22:33:44:55:67。',
			'Here you can upload your personal Welcome banner that will overwrite * default one.' : '可在此上传你个人自定义的欢迎页面, 将会覆写到原本的欢迎页面路径。',
			'* default' : '* 为默认值',
			'Note: If Login Time is expired you should re-enter again into the splash page to get a new lease period. Be aware, there is no notice about expired period so, you can loss Internet Access.' : '说明: 若登入时间已到期,你应该重新登入欢迎页面以取得新的租期。请注意租约到期并不会有任何的相关公告, 所以若不重新登入, 你可能会失去存取网际网络的权限。',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato VPN 通道的 OpenVPN 服务器页面
	// ===============================================================
	if (TomatoPage == 'vpn-server.asp') {
		Tomato_VpnServer = document.getElementsByClassName('section-title');
		Tomato_VpnServer[0].innerHTML = 'OpenVPN 服务器设置';
		
		Tomato_VpnServer = document.getElementsByTagName('a');
		for (var i = 0 ; Tomato_VpnServer.length > i ; i++) {
			switch(Tomato_VpnServer[i].innerHTML) {
				case 'Server 1':
					Tomato_VpnServer[i].innerHTML = '服务器 1';
					break;
				case 'Server 2':
					Tomato_VpnServer[i].innerHTML = '服务器 2';
					break;
				case 'Basic':
					Tomato_VpnServer[i].innerHTML = '基本设置';
					break;
				case 'Advanced':
					Tomato_VpnServer[i].innerHTML = '进阶设置';
					break;
				case 'Keys':
					Tomato_VpnServer[i].innerHTML = '密钥设置';
					break;
				case 'Status':
					Tomato_VpnServer[i].innerHTML = '状态';
					break;
				case 'Refresh Status':
					Tomato_VpnServer[i].innerHTML = '更新状态';
					break;
			}
		}
		
		Tomato_VpnServer = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_VpnServer.length > i ; i++) {
			switch(Tomato_VpnServer[i].innerHTML) {
				case 'Start with WAN':
					Tomato_VpnServer[i].innerHTML = '与广域网一起启动';
					break;
				case 'Interface Type':
					Tomato_VpnServer[i].innerHTML = '界面类型';
					break;
				case 'Protocol':
					Tomato_VpnServer[i].innerHTML = '通讯协定';
					break;
				case 'Port':
					Tomato_VpnServer[i].innerHTML = '连接端口';
					break;
				case 'Firewall':
					Tomato_VpnServer[i].innerHTML = '防火墙';
					break;
				case 'Authorization Mode':
					Tomato_VpnServer[i].innerHTML = '授权模式';
					break;
				case 'Extra HMAC authorization (tls-auth)':
					Tomato_VpnServer[i].innerHTML = '扩展 HMAC 授权 (tls-auth)';
					break;
				case 'VPN subnet/netmask':
					Tomato_VpnServer[i].innerHTML = 'VPN 子网络 / 掩码';
					break;
				case 'Local/remote endpoint addresses':
					Tomato_VpnServer[i].innerHTML = '本地 / 远端端点地址';
					break;
				case 'Poll Interval':
					Tomato_VpnServer[i].innerHTML = '轮询间隔';
					break;
				case 'Push LAN to clients':
					Tomato_VpnServer[i].innerHTML = '推送 LAN 至用户端';
					break;
				case 'Direct clients to<br>redirect Internet traffic':
					Tomato_VpnServer[i].innerHTML = '重新导向用户端的网际网络流量至 VPN 服务器';
					break;
				case 'Respond to DNS':
					Tomato_VpnServer[i].innerHTML = '回应 DNS';
					break;
				case 'Advertise DNS to clients':
					Tomato_VpnServer[i].innerHTML = '通报 DNS 至用户端';
					break;
				case 'Encryption cipher':
					Tomato_VpnServer[i].innerHTML = '加密方式';
					break;
				case 'Compression':
					Tomato_VpnServer[i].innerHTML = '资料压缩';
					break;
				case 'TLS Renegotiation Time':
					Tomato_VpnServer[i].innerHTML = 'TLS 重新协商时间';
					break;
				case 'Manage Client-Specific Options':
					Tomato_VpnServer[i].innerHTML = '管理用户端特定选项';
					break;
				case 'Allow Only These Clients':
					Tomato_VpnServer[i].innerHTML = '仅允许这些用户端';
					break;
				case 'Allow User/Pass Auth':
					Tomato_VpnServer[i].innerHTML = '允许帐号 / 密码认证';
					break;
				case 'Allow Only User/Pass(Without cert) Auth':
					Tomato_VpnServer[i].innerHTML = '仅允许帐号 / 密码认证 (停用凭证)';
					break;
				case 'Custom Configuration':
					Tomato_VpnServer[i].innerHTML = '自定义设置';
					break;
				case 'Certificate Authority':
					Tomato_VpnServer[i].innerHTML = '认证中心';
					break;
				case 'Server Certificate':
					Tomato_VpnServer[i].innerHTML = '服务器凭证';
					break;
				case 'Server Key':
					Tomato_VpnServer[i].innerHTML = '服务器密钥';
					break;
				case 'Diffie Hellman parameters':
					Tomato_VpnServer[i].innerHTML = 'Diffie Hellman 参数';
					break;
			}
		}
		
		Tomato_VpnServer = document.getElementsByClassName('co1');
		Tomato_VpnServer[0].innerHTML = '启用';
		Tomato_VpnServer[1].innerHTML = '启用';
		Tomato_VpnServer = document.getElementsByClassName('co2');
		Tomato_VpnServer[0].innerHTML = '公共名称';
		Tomato_VpnServer[1].innerHTML = '用户名称';
		Tomato_VpnServer = document.getElementsByClassName('co3');
		Tomato_VpnServer[0].innerHTML = '子网络';
		Tomato_VpnServer[1].innerHTML = '密码';
		Tomato_VpnServer = document.getElementsByClassName('co4');
		Tomato_VpnServer[0].innerHTML = '子网络掩码';
		Tomato_VpnServer = document.getElementsByClassName('co5');
		Tomato_VpnServer[0].innerHTML = '推送';
		
		var words = {
			'Automatic' : '自动',
			'External Only' : '仅外部',
			'Custom' : '自定义',
			'Static Key' : '固定密钥',
			'must configure manually...' : '必需自己手动设置...',
			'Allow Client<->Client' : '允许用户端互连',
			'in minutes, 0 to disable' : '分钟, 0 为停用',
			'Use Default' : '使用默认',
			'None' : '无',
			'Disabled' : '停用',
			'Enabled' : '启用',
			'Adaptive' : '自动调整',
			'in seconds, -1 for default' : '秒, -1 为默认值',
			'For help generating keys, refer to the OpenVPN' : '对于如何产生密钥的方式, 请参考 OpenVPN 的',
			'Server is not running or status could not be read.' : '服务器尚未启动或状态无法读取。',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato VPN 通道的 OpenVPN 用户端页面
	// ===============================================================
	if (TomatoPage == 'vpn-client.asp') {
		Tomato_VpnClient = document.getElementsByClassName('section-title');
		Tomato_VpnClient[0].innerHTML = 'OpenVPN 用户端设置';
		
		Tomato_VpnClient = document.getElementsByTagName('a');
		for (var i = 0 ; Tomato_VpnClient.length > i ; i++) {
			switch(Tomato_VpnClient[i].innerHTML) {
				case 'Client 1':
					Tomato_VpnClient[i].innerHTML = '用户端 1';
					break;
				case 'Client 2':
					Tomato_VpnClient[i].innerHTML = '用户端 2';
					break;
				case 'Basic':
					Tomato_VpnClient[i].innerHTML = '基本设置';
					break;
				case 'Advanced':
					Tomato_VpnClient[i].innerHTML = '进阶设置';
					break;
				case 'Keys':
					Tomato_VpnClient[i].innerHTML = '密钥设置';
					break;
				case 'Status':
					Tomato_VpnClient[i].innerHTML = '状态';
					break;
				case 'Refresh Status':
					Tomato_VpnClient[i].innerHTML = '更新状态';
					break;
			}
		}
		
		Tomato_VpnClient = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_VpnClient.length > i ; i++) {
			switch(Tomato_VpnClient[i].innerHTML) {
				case 'Start with WAN':
					Tomato_VpnClient[i].innerHTML = '与广域网一起启动';
					break;
				case 'Interface Type':
					Tomato_VpnClient[i].innerHTML = '界面类型';
					break;
				case 'Protocol':
					Tomato_VpnClient[i].innerHTML = '通讯协定';
					break;
				case 'Server Address/Port':
					Tomato_VpnClient[i].innerHTML = '服务器地址 / 连接端口';
					break;
				case 'Firewall':
					Tomato_VpnClient[i].innerHTML = '防火墙';
					break;
				case 'Authorization Mode':
					Tomato_VpnClient[i].innerHTML = '授权模式';
					break;
				case 'Username/Password Authentication':
					Tomato_VpnClient[i].innerHTML = '帐号 / 密码认证';
					break;
				case 'Username: ':
					Tomato_VpnClient[i].innerHTML = '帐号:';
					break;
				case 'Password: ':
					Tomato_VpnClient[i].innerHTML = '密码:';
					break;
				case 'Username Authen. Only':
					Tomato_VpnClient[i].innerHTML = '仅用帐号认证';
					break;
				case 'Extra HMAC authorization (tls-auth)':
					Tomato_VpnClient[i].innerHTML = '扩展 HMAC 授权 (tls-auth)';
					break;
				case 'Create NAT on tunnel':
					Tomato_VpnClient[i].innerHTML = '建立通道 NAT';
					break;
				case 'Local/remote endpoint addresses':
					Tomato_VpnClient[i].innerHTML = '本地 / 远端端点地址';
					break;
				case 'Poll Interval':
					Tomato_VpnClient[i].innerHTML = '轮询间隔';
					break;
				case 'Redirect Internet traffic':
					Tomato_VpnClient[i].innerHTML = '重新导向网际网络流量';
					break;
				case 'Accept DNS configuration':
					Tomato_VpnClient[i].innerHTML = '接受 DNS 设置';
					break;
				case 'Encryption cipher':
					Tomato_VpnClient[i].innerHTML = '加密方式';
					break;
				case 'Compression':
					Tomato_VpnClient[i].innerHTML = '资料压缩';
					break;
				case 'TLS Renegotiation Time':
					Tomato_VpnClient[i].innerHTML = 'TLS 重新协商时间';
					break;
				case 'Connection retry':
					Tomato_VpnClient[i].innerHTML = '连接重试';
					break;
				case 'Verify server certificate (tls-remote)':
					Tomato_VpnClient[i].innerHTML = '验证服务器凭证 (tls-remote)';
					break;
				case 'Custom Configuration':
					Tomato_VpnClient[i].innerHTML = '自定义设置';
					break;
				case 'Certificate Authority':
					Tomato_VpnClient[i].innerHTML = '认证中心';
					break;
				case 'Client Certificate':
					Tomato_VpnClient[i].innerHTML = '用户端凭证';
					break;
				case 'Client Key':
					Tomato_VpnClient[i].innerHTML = '用户端密钥';
					break;
			}
		}
		
		var words = {
			'Automatic' : '自动',
			'Custom' : '自定义',
			'Static Key' : '固定密钥',
			'Warning: Must define Certificate Authority.' : '注意: 必须定义认证中心。',
			'must configure manually...' : '必需自己手动设置...',
			'Routes must be configured manually.' : '路由表必须自己手动设置。',
			'Common Name:' : '公共名称:',
			'in minutes, 0 to disable' : '分钟, 0 为停用',
			'Use Default' : '使用默认',
			'None' : '无',
			'Disabled' : '停用',
			'Enabled' : '启用',
			'Adaptive' : '自动调整',
			'in seconds, -1 for default' : '秒, -1 为默认值',
			'in seconds; -1 for infinite' : '秒, -1 为无限制',
			'For help generating keys, refer to the OpenVPN' : '对于如何产生密钥的方式, 请参考 OpenVPN 的',
			'Client is not running or status could not be read.' : '用户端尚未启动或状态无法读取。',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato VPN 通道的 PPTP 服务器页面
	// ===============================================================
	if (TomatoPage == 'vpn-pptp-server.asp') {
		Tomato_VpnPptpServer = document.getElementsByClassName('section-title');
		Tomato_VpnPptpServer[0].innerHTML = 'PPTP 服务器设置';
		Tomato_VpnPptpServer[1].innerHTML = 'PPTP 帐号清单';
		
		Tomato_VpnPptpServer = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_VpnPptpServer.length > i ; i++) {
			switch(Tomato_VpnPptpServer[i].innerHTML) {
				case 'Enable':
					Tomato_VpnPptpServer[i].innerHTML = '启用';
					break;
				case 'Remote IP Address Range':
					Tomato_VpnPptpServer[i].innerHTML = '用户端 IP 地址范围';
					break;
				case 'Broadcast Relay Mode':
					Tomato_VpnPptpServer[i].innerHTML = '广播中继模式';
					break;
				case 'Encryption':
					Tomato_VpnPptpServer[i].innerHTML = '加密方式';
					break;
				case 'DNS Servers':
					Tomato_VpnPptpServer[i].innerHTML = 'DNS 服务器';
					break;
				case 'WINS Servers':
					Tomato_VpnPptpServer[i].innerHTML = 'WINS 服务器';
					break;
				case 'MTU':
					Tomato_VpnPptpServer[i].innerHTML = '最大传输单位 (MTU)';
					break;
				case 'MRU':
					Tomato_VpnPptpServer[i].innerHTML = '最大接收单位 (MRU)';
					break;
			}
		}
		
		Tomato_VpnPptpServer = document.getElementsByClassName('title indent1');
		Tomato_VpnPptpServer[1].innerHTML = '本地 IP 地址 / 掩码';
		
		Tomato_VpnPptpServer = document.getElementsByTagName('b');
		for (var i = 0 ; Tomato_VpnPptpServer.length > i ; i++) {
			switch(Tomato_VpnPptpServer[i].innerHTML) {
				case 'Local IP Address/Netmask':
					Tomato_VpnPptpServer[i].innerHTML = '本地 IP 地址 / 掩码';
					break;
				case 'Remote IP Address Range':
					Tomato_VpnPptpServer[i].innerHTML = '用户端 IP 地址范围';
					break;
				case 'Broadcast Relay Mode':
					Tomato_VpnPptpServer[i].innerHTML = '广播中继模式';
					break;
				case 'Enable Encryption':
					Tomato_VpnPptpServer[i].innerHTML = '加密方式';
					break;
				case 'DNS Servers':
					Tomato_VpnPptpServer[i].innerHTML = 'DNS 服务器';
					break;
				case 'WINS Servers':
					Tomato_VpnPptpServer[i].innerHTML = 'WINS 服务器';
					break;
				case 'MTU':
					Tomato_VpnPptpServer[i].innerHTML = 'MTU';
					break;
				case 'MRU':
					Tomato_VpnPptpServer[i].innerHTML = 'MRU';
					break;
			}
		}
		
		var words = {
			'Custom configuration' : '自定义设置',
			'Disabled' : '停用',
			'LAN to VPN Clients' : 'LAN 到 VPN 用户端',
			'VPN Clients to LAN' : 'VPN 用户端到 LAN',
			'Both' : '两者同时启用',
			'None' : '无',
			'Notes' : '说明',
			'Click here to hide' : '隐藏细节',
			'Click here to show' : '显示细节',
			'Address to be used at the local end of the tunnelled PPP links between the server and the VPN clients.' : '用来连接 VPN 服务器及用户端之间的本地 IP 地址。',
			'Remote IP addresses to be used on the tunnelled PPP links (max 6).' : '设置分配给 VPN 用户端的 IP 地址范围 (最大值为 6)。',
			'Turns on broadcast relay between VPN clients and LAN interface.' : '设置在 VPN 用户端及 LAN 界面之间的广播中继模式。',
			'Enabling this option will turn on VPN channel encryption, but it might lead to reduced channel bandwidth.' : '启用此项目将会加密 VPN 通道, 但它有可能会使带宽降低。',
			'Allows defining DNS servers manually (if none are set, the router/local IP address should be used by VPN clients).' : '允许自定义 DNS 服务器给 VPN 用户端使用 (如果没有设置, VPN 用户端应设置成使用路由器/本地 IP 地址)。',
			'Allows configuring extra WINS servers for VPN clients, in addition to the WINS server defined on' : '允许设置额外的 WINS 服务器给 VPN 用户端使用, 另外也可设置 WINS 服务器在',
			'Basic/Network' : '基本设置/网络连接',
			'Maximum Transmission Unit. Max packet size the PPTP interface will be able to send without packet fragmentation.' : '最大传输单位。在不分割封包的情况下, PPTP 界面所能传送的最大封包大小。',
			'Maximum Receive Unit. Max packet size the PPTP interface will be able to receive without packet fragmentation.' : '最大接收单位。在不分割封包的情况下, PPTP 界面所能接收的最大封包大小。',
			'Other relevant notes/hints' : '其他相关说明及提示',
			'Try to avoid any conflicts and/or overlaps between the address ranges configured/available for DHCP and VPN clients on your local networks.' : '请避免将分配给 VPN 用户端的 IP 地址范围, 设置成跟路由器 DHCP 所配发的 IP 地址范围重叠。',
			'PPTP Online' : 'PPTP 连接状态',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(ReplaceVpn, 200);
		setTimeout(RefreshPage, 200);
	}


	// Tomato VPN 通道的 PPTP 连接状态页面
	// ===============================================================
	if (TomatoPage == 'vpn-pptp-online.asp') {
		Tomato_VpnPptpOnline = document.getElementsByClassName('section-title');
		Tomato_VpnPptpOnline[0].innerHTML = 'PPTP 线上用户列表';
		
		Tomato_VpnPptpOnline = document.getElementsByClassName('co1');
		Tomato_VpnPptpOnline[0].innerHTML = '界面';
		Tomato_VpnPptpOnline = document.getElementsByClassName('co2');
		Tomato_VpnPptpOnline[0].innerHTML = '帐号';
		Tomato_VpnPptpOnline = document.getElementsByClassName('co3');
		Tomato_VpnPptpOnline[0].innerHTML = '连接时间';
		Tomato_VpnPptpOnline = document.getElementsByClassName('co4');
		Tomato_VpnPptpOnline[0].innerHTML = '通道 IP 地址';
		Tomato_VpnPptpOnline = document.getElementsByClassName('co5');
		Tomato_VpnPptpOnline[0].innerHTML = '来源 IP 地址';
		Tomato_VpnPptpOnline = document.getElementsByClassName('co6');
		Tomato_VpnPptpOnline[0].innerHTML = '动作';
		
		var words = {
			'Configure' : '设置',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato VPN 通道的 PPTP 用户端页面
	// ===============================================================
	if (TomatoPage == 'vpn-pptp.asp') {
		Tomato_VpnPptp = document.getElementsByClassName('section-title');
		Tomato_VpnPptp[0].innerHTML = 'PPTP 用户端设置';
		
		Tomato_VpnPptp = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_VpnPptp.length > i ; i++) {
			switch(Tomato_VpnPptp[i].innerHTML) {
				case 'Start with WAN':
					Tomato_VpnPptp[i].innerHTML = '与广域网一起启动';
					break;
				case 'Server Address':
					Tomato_VpnPptp[i].innerHTML = '服务器 IP 地址';
					break;
				case 'Username: ':
					Tomato_VpnPptp[i].innerHTML = '帐号:';
					break;
				case 'Password: ':
					Tomato_VpnPptp[i].innerHTML = '密码:';
					break;
				case 'Encryption':
					Tomato_VpnPptp[i].innerHTML = '加密方式';
					break;
				case 'Stateless MPPE connection':
					Tomato_VpnPptp[i].innerHTML = '无状态 MPPE 连接模式';
					break;
				case 'Accept DNS configuration':
					Tomato_VpnPptp[i].innerHTML = '接受 DNS 设置';
					break;
				case 'Redirect Internet traffic':
					Tomato_VpnPptp[i].innerHTML = '重新导向网际网络流量';
					break;
				case 'Remote subnet / netmask':
					Tomato_VpnPptp[i].innerHTML = '远端子网络 / 掩码';
					break;
				case 'Create NAT on tunnel':
					Tomato_VpnPptp[i].innerHTML = '建立通道 NAT';
					break;
				case 'MTU':
					Tomato_VpnPptp[i].innerHTML = '最大传输单位 (MTU)';
					break;
				case 'MRU':
					Tomato_VpnPptp[i].innerHTML = '最大接收单位 (MRU)';
					break;
				case 'Custom Configuration':
					Tomato_VpnPptp[i].innerHTML = '自定义设置';
					break;
			}
		}
		
		var words = {
			'Auto' : '自动',
			'None' : '无',
			'Maximum (128 bit only)' : '最大 (仅 128 位元)',
			'Required (128 or 40 bit)' : '视需求 (128 或 40 位元)',
			'Disabled' : '停用',
			'Yes' : '是',
			'Default' : '默认',
			'Manual' : '自定义',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 路由器管理的连接登入与密码页面
	// ===============================================================
	if (TomatoPage == 'admin-access.asp') {
		Tomato_AdminAccess = document.getElementsByClassName('section-title');
		Tomato_AdminAccess[0].innerHTML = '网页管理界面';
		Tomato_AdminAccess[1].innerHTML = 'SSH 连接服务';
		Tomato_AdminAccess[2].innerHTML = 'Telnet 连接服务';
		Tomato_AdminAccess[3].innerHTML = '管理限制';
		Tomato_AdminAccess[4].innerHTML = '管理密码';
		
		Tomato_AdminAccess = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_AdminAccess.length > i ; i++) {
			switch(Tomato_AdminAccess[i].innerHTML) {
				case 'Local Access':
					Tomato_AdminAccess[i].innerHTML = '本地登入';
					break;
				case 'HTTP Port':
					Tomato_AdminAccess[i].innerHTML = 'HTTP 连接端口';
					break;
				case 'Remote Access':
					Tomato_AdminAccess[i].innerHTML = '远端登入';
					break;
				case 'Allow Wireless Access':
					Tomato_AdminAccess[i].innerHTML = '允许无线网络登入';
					break;
				case 'Color Scheme':
					Tomato_AdminAccess[i].innerHTML = '布景主题';
					break;
				case 'TTB ID#':
					Tomato_AdminAccess[i].innerHTML = '蕃茄主题名称';
					break;
				case 'Open Menus':
					Tomato_AdminAccess[i].innerHTML = '固定展开的选单';
					break;
				case 'Status':
					Tomato_AdminAccess[i].innerHTML = '系统状态';
					break;
				case 'Bandwidth':
					Tomato_AdminAccess[i].innerHTML = '带宽监控';
					break;
				case 'IP Traffic':
					Tomato_AdminAccess[i].innerHTML = 'IP 流量监控';
					break;
				case 'Tools':
					Tomato_AdminAccess[i].innerHTML = '诊断工具';
					break;
				case 'Basic':
					Tomato_AdminAccess[i].innerHTML = '基本设置';
					break;
				case 'Advanced':
					Tomato_AdminAccess[i].innerHTML = '进阶设置';
					break;
				case 'Port Forwarding':
					Tomato_AdminAccess[i].innerHTML = '连接端口转发';
					break;
				case 'QoS':
					Tomato_AdminAccess[i].innerHTML = '网络品质管理';
					break;
				case 'VPN Tunneling':
					Tomato_AdminAccess[i].innerHTML = 'VPN 通道';
					break;
				case 'Administration':
					Tomato_AdminAccess[i].innerHTML = '路由器管理';
					break;
				case 'Enable at Startup':
					Tomato_AdminAccess[i].innerHTML = '开机自动启用';
					break;
				case 'Extended MOTD':
					Tomato_AdminAccess[i].innerHTML = '显示欢迎讯息';
					break;
				case 'Remote Forwarding':
					Tomato_AdminAccess[i].innerHTML = '远端连接端口转发';
					break;
				case 'Port':
					Tomato_AdminAccess[i].innerHTML = '连接端口';
					break;
				case 'Allow Password Login':
					Tomato_AdminAccess[i].innerHTML = '允许密码登入';
					break;
				case 'Authorized Keys':
					Tomato_AdminAccess[i].innerHTML = '授权密钥';
					break;
				case 'Allowed Remote<br>IP Address':
					Tomato_AdminAccess[i].innerHTML = '允许远端登入的 IP 地址';
					break;
				case 'Limit Connection Attempts':
					Tomato_AdminAccess[i].innerHTML = '限制连接尝试次数';
					break;
				case 'Password':
					Tomato_AdminAccess[i].innerHTML = '密码';
					break;
			}
		}
		
		Tomato_AdminAccess = document.getElementById('_web_css').childNodes;
		for (var i = 0 ; Tomato_AdminAccess.length > i ; i++) {
			switch(Tomato_AdminAccess[i].innerHTML) {
				case 'USB Blue - OpenLinksys':
					Tomato_AdminAccess[i].innerHTML = 'USB 蓝色 - OpenLinksys';
					break;
				case 'Tomato':
					Tomato_AdminAccess[i].innerHTML = 'Tomato 默认主题';
					break;
				case 'Custom (ext/custom.css)':
					Tomato_AdminAccess[i].innerHTML = '自定义样式 (ext/custom.css)';
					break;
				case 'On-line from TTB':
					Tomato_AdminAccess[i].innerHTML = '线上主题 (TTB)';
					break;
			}
		}
		
		var words = {
			'Disabled' : '停用',
			'Theme name from' : '取得主题名称:',
			'TTB themes gallery' : '蕃茄主题基地',
			'optional; ex: "1.1.1.1", "1.1.1.0/24", "1.1.1.1 - 2.2.2.2" or "me.example.com"' : '可选填; 例如: "1.1.1.1", "1.1.1.0/24", "1.1.1.1 - 2.2.2.2" 或 "me.example.com"',
			'every' : '次, 每',
			're-enter to confirm' : '请再次输入以确认密码',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 路由器管理的匿名回报页面
	// ===============================================================
	if (TomatoPage == 'admin-tomatoanon.asp') {
		Tomato_AdminTomatoanon = document.getElementsByClassName('section-title');
		Tomato_AdminTomatoanon[0].innerHTML = '关于 TomatoAnon 计划';
		Tomato_AdminTomatoanon[2].innerHTML = 'Tomato 版本更新通知';
		
		Tomato_AdminTomatoanon = document.getElementsByClassName('about');
		Tomato_AdminTomatoanon[0].innerHTML = '<b>大家好,</b><br><br>我想向大家介绍一个我一直在推动的新计划 - TomatoAnon。<br>这个 TomatoAnon 脚本会将你使用的路由器型号及所安装的 Tomato 版本等信息上传至网络资料库。<br>这些信息完全是匿名搜集, 而且仅是做为统计用途。<br><b>这个脚本并不会传送任何私人的信息 (例如 MAC 或 IP 等信息)!</b><br>这个脚本是以 bash 所写的, 并且完全公开原始码, 任何人都可以检视哪些信息会被传送至资料库。<br><br>你可以到  <a href=http://tomato.groov.pl/tomatoanon.php target=_blanc><b>http://tomato.groov.pl/tomatoanon.php</b></a> 页面查看统计结果。<br>这些信息可以在你要选购路由器时, 帮助你了解在你的国家里, 哪些路由器是最好、最受欢迎的选择。<br>你也可以借此了解哪一个 Tomato 版本最常被使用及哪一个版本最为稳定。<br><br>如果你不同意或不希望执行这个脚本, 你可以把这个功能关闭。<br>你也可以随时再启用这个功能。<br><br>TomatoAnon 搜集的信息如下：:<br>- WAN+LAN MAC 地址的 MD5SUM 运算码 - 这将用来做为每台路由器的识别码 (例如: 1c1dbd4202d794251ec1acf1211bb2c8)。<br>- 路由器型号 (例如: Asus RT-N66U)。<br>- Tomato 安装版本 (例如: 102 K26 USB)。<br>- Tomato 建构类型 (例如: Mega-VPN-64K)。<br>- 路由器运作时间 (例如: 3 days)。<br>以上!!<br><br>谢谢你的阅读, 请作出正确的选择以协助这个计划的推动。<br><br><b>此致最高敬意!</b></font>';
		
		Tomato_AdminTomatoanon = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_AdminTomatoanon.length > i ; i++) {
			switch(Tomato_AdminTomatoanon[i].innerHTML) {
				case 'Do you know what TomatoAnon doing ?':
					Tomato_AdminTomatoanon[i].innerHTML = '你已知道 TomatoAnon 的作用了吗?';
					break;
				case 'Do you want enable TomatoAnon ?':
					Tomato_AdminTomatoanon[i].innerHTML = '你要启用 TomatoAnon 吗?';
					break;
				case 'Send every':
					Tomato_AdminTomatoanon[i].innerHTML = '传送资料间隔时间';
					break;
				case 'Enable':
					Tomato_AdminTomatoanon[i].innerHTML = '启用';
					break;
			}
		}
		
		var words = {
			'TomatoAnon Settings' : 'TomatoAnon 设置',
			'Checkout my router' : '查看我的路由器',
			'No, i don`t. Have to read all information, before i will make a choice' : '不, 请等我阅读过所有信息后再做决定',
			'Yes, i do and want to make a choice' : '是的, 我已知道并且将做一个选择',
			'I`m not sure right now' : '我目前还不能决定',
			'Yes, i`m sure i do' : '是的, 我已确定要启用',
			'No, i definitely wont enable it' : '不, 我绝对不会启用它',
			'hours (range: 1 - 12; default: 6)' : '小时 (范围: 1 - 12; 默认值: 6)',
			'When new tomato version will be available, you will be notified about this on status-overview page.' : '当有新的 Tomato 版本推出时, 你将在系统状态页面收到更新通知。',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 路由器管理的带宽监控页面
	// ===============================================================
	if (TomatoPage == 'admin-bwm.asp') {
		Tomato_AdminBwm = document.getElementsByClassName('section-title');
		Tomato_AdminBwm[0].innerHTML = '带宽监控设置';
		Tomato_AdminBwm[1].innerHTML = '备份带宽监控记录';
		Tomato_AdminBwm[2].innerHTML = '还原带宽监控记录';
		
		Tomato_AdminBwm = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_AdminBwm.length > i ; i++) {
			switch(Tomato_AdminBwm[i].innerHTML) {
				case 'Enable':
					Tomato_AdminBwm[i].innerHTML = '启用';
					break;
				case 'Save History Location':
					Tomato_AdminBwm[i].innerHTML = '储存历史记录位置';
					break;
				case 'Save Frequency':
					Tomato_AdminBwm[i].innerHTML = '储存频率';
					break;
				case 'Save On Shutdown':
					Tomato_AdminBwm[i].innerHTML = '关机自动储存';
					break;
				case 'Create New File<br><small>(Reset Data)</small>':
					Tomato_AdminBwm[i].innerHTML = '建立新档 (重置资料)';
					break;
				case 'Create Backups':
					Tomato_AdminBwm[i].innerHTML = '建立备份';
					break;
				case 'First Day Of The Month':
					Tomato_AdminBwm[i].innerHTML = '每月首日';
					break;
				case 'Excluded Interfaces':
					Tomato_AdminBwm[i].innerHTML = '要排除的网络界面';
					break;
			}
		}
		
		var words = {
			'RAM (Temporary)' : 'RAM (暂存)',
			'Custom Path' : '自定义路径',
			'Every Hour' : '每小时',
			'Every Week' : '每周',
			'Every' : '每',
			'Hours' : '小时',
			'Days' : '天',
			'comma separated list' : '请以逗号分隔网络界面名称',
			'Link' : '下载记录',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 路由器管理的 IP 流量监控页面
	// ===============================================================
	if (TomatoPage == 'admin-iptraffic.asp') {
		Tomato_AdminIptraffic = document.getElementsByClassName('section-title');
		Tomato_AdminIptraffic[0].innerHTML = 'IP 流量监控设置';
		Tomato_AdminIptraffic[1].innerHTML = '备份流量监控记录';
		Tomato_AdminIptraffic[2].innerHTML = '还原流量监控记录';
		
		Tomato_AdminIptraffic = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_AdminIptraffic.length > i ; i++) {
			switch(Tomato_AdminIptraffic[i].innerHTML) {
				case 'Enable':
					Tomato_AdminIptraffic[i].innerHTML = '启用';
					break;
				case 'Save History Location':
					Tomato_AdminIptraffic[i].innerHTML = '储存历史记录位置';
					break;
				case 'Save Frequency':
					Tomato_AdminIptraffic[i].innerHTML = '储存频率';
					break;
				case 'Save On Shutdown':
					Tomato_AdminIptraffic[i].innerHTML = '关机自动储存';
					break;
				case 'Create New File<br><small>(Reset Data)</small>':
					Tomato_AdminIptraffic[i].innerHTML = '建立新档 (重置资料)';
					break;
				case 'Create Backups':
					Tomato_AdminIptraffic[i].innerHTML = '建立备份';
					break;
				case 'First Day Of The Month':
					Tomato_AdminIptraffic[i].innerHTML = '每月首日';
					break;
				case 'Excluded IPs':
					Tomato_AdminIptraffic[i].innerHTML = '要排除的 IP 地址';
					break;
				case 'Included IPs':
					Tomato_AdminIptraffic[i].innerHTML = '要监控的 IP 地址';
					break;
				case 'Enable Auto-Discovery':
					Tomato_AdminIptraffic[i].innerHTML = '启用自动监控';
					break;
				case 'Labels on graphics':
					Tomato_AdminIptraffic[i].innerHTML = '图表标签内容';
					break;
			}
		}
		
		var words = {
			'RAM (Temporary)' : 'RAM (暂存)',
			'Custom Path' : '自定义路径',
			'Every Hour' : '每小时',
			'Every Week' : '每周',
			'Every' : '每',
			'Hours' : '小时',
			'Days' : '天',
			'comma separated list' : '请以逗号分隔 IP 地址',
			'Link' : '下载记录',
			'automatically include new IPs in monitoring as soon as any traffic is detected' : '自动监控有网络流量的新 IP 地址',
			'Show known hostnames and IPs' : '显示已知主机名称及 IP 地址',
			'Prefer to show only known hostnames, otherwise show IPs' : '优先显示已知主机名称, 其它则显示 IP 地址',
			'Show only IPs' : '仅显示 IP 地址',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 路由器管理的按钮 / 灯号页面
	// ===============================================================
	if (TomatoPage == 'admin-buttons.asp') {
		var words = {
			'This feature is not supported on this router.' : '这台路由器不支援此功能。',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 路由器管理的网络芳邻挂载页面
	// ===============================================================
	if (TomatoPage == 'admin-cifs.asp') {
		Tomato_AdminCifs = document.getElementsByClassName('section-title');
		Tomato_AdminCifs[0].innerHTML = '网络芳邻挂载设置 (CIFS Client)';

		Tomato_AdminCifs = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_AdminCifs.length > i ; i++) {
			switch(Tomato_AdminCifs[i].innerHTML) {
				case 'Enable':
					Tomato_AdminCifs[i].innerHTML = '启用';
					break;
				case 'UNC':
					Tomato_AdminCifs[i].innerHTML = 'UNC 路径';
					break;
				case 'Netbios Name':
					Tomato_AdminCifs[i].innerHTML = 'Netbios 名称';
					break;
				case 'Username':
					Tomato_AdminCifs[i].innerHTML = '使用者名称';
					break;
				case 'Password':
					Tomato_AdminCifs[i].innerHTML = '密码';
					break;
				case 'Domain':
					Tomato_AdminCifs[i].innerHTML = '网域';
					break;
				case 'Execute When Mounted':
					Tomato_AdminCifs[i].innerHTML = '挂载后执行';
					break;
				case 'Security':
					Tomato_AdminCifs[i].innerHTML = '安全性等级';
					break;
			}
		}
		
		var words = {
			'Total / Free Size' : '总容量 / 可用空间',
			'Default (NTLM)' : '默认 (NTLM)',
			'NTLM and packet signing' : 'NTLM 及封包签章',
			'NTLMv2 and packet signing' : 'NTLMv2 及封包签章',
			'None' : '无',
			'not mounted' : '尚未挂载',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 路由器管理的路由器设置值页面
	// ===============================================================
	if (TomatoPage == 'admin-config.asp') {
		Tomato_AdminConfig = document.getElementsByClassName('section-title');
		Tomato_AdminConfig[0].innerHTML = '备份路由器设置值';
		Tomato_AdminConfig[1].innerHTML = '还原路由器设置值';
		Tomato_AdminConfig[2].innerHTML = '恢复默认值';
		
		Tomato_AdminConfig = document.getElementsByClassName('title indent1');
		Tomato_AdminConfig[0].innerHTML = '总计/可用 NVRAM';
		
		var words = {
			'Link' : '下载设置档',
			'Select the configuration file to restore:' : '请选择所要还原的设置档:',
			'Select...' : '请选择...',
			'Restore default router settings (normal)' : '恢复 Tomato 默认值 (标准)',
			'Erase all data in NVRAM memory (thorough)' : '清除 NVRAM 全部资料 (彻底)',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 路由器管理的路由器除错页面
	// ===============================================================
	if (TomatoPage == 'admin-debug.asp') {
		Tomato_AdminDebug = document.getElementsByClassName('section-title');
		Tomato_AdminDebug[0].innerHTML = '路由器除错设置';
		
		Tomato_AdminDebug = document.getElementsByClassName('title indent1');
		for (var i = 0 ; Tomato_AdminDebug.length > i ; i++) {
			Tomato_AdminDebug[i].style.width = '240px';
		}

		Tomato_AdminDebug = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_AdminDebug.length > i ; i++) {
			switch(Tomato_AdminDebug[i].innerHTML) {
				case 'Avoid performing an NVRAM commit':
					Tomato_AdminDebug[i].innerHTML = '避免执行写入 NVRAM';
					break;
				case 'Enable cprintf output to console':
					Tomato_AdminDebug[i].innerHTML = '启用 cprintf 输出至主控台';
					break;
				case 'Enable cprintf output to /tmp/cprintf':
					Tomato_AdminDebug[i].innerHTML = '启用 cprintf 输出至 /tmp/cprintf';
					break;
				case 'Enable DDNS output to /tmp/mdu-*':
					Tomato_AdminDebug[i].innerHTML = '启用 DDNS 输出至 /tmp/mdu-*';
					break;
				case 'Count cache memory and buffers as free memory':
					Tomato_AdminDebug[i].innerHTML = '将快取记忆体及缓冲区列入可用记忆体';
					break;
				case 'Avoid displaying LAN to router connections':
					Tomato_AdminDebug[i].innerHTML = '避免显示从 LAN 到路由器的连接';
					break;
				case 'Console log level':
					Tomato_AdminDebug[i].innerHTML = '主控台日志记录层级';
					break;
				case 'Do not restart the following process if they die':
					Tomato_AdminDebug[i].innerHTML = '当下列程序消失时不要重新启动';
					break;
			}
		}
		
		var words = {
			'Clear Cookies' : '清除 Cookies',
			'NVRAM Commit' : '写入 NVRAM',
			'Reboot' : '重新开机',
			'Shutdown' : '关机',
			'Download CFE' : '下载 CFE',
			'Download Iptables Dump' : '下载 Iptables 倾印档',
			'Download Ip6tables Dump' : '下载 Ip6tables 倾印档',
			'Download Logs' : '下载日志记录档',
			'Download NVRAM Dump' : '下载 NVRAM 倾印档',
			'Warning' : '警告',
			'The NVRAM Dump text file may contain information like wireless' : 'NVRAM 倾印文件档包含重要的个人信息,',
			'encryption keys and usernames/passwords for the router, ISP and DDNS. Please' : '例如无线密钥, ISP 及 DDNS 的帐号/密码...等。',
			'review & edit this file before sharing it with' : '请先检视并编辑这个档案, 将重要的个人信息清除后再交予他人。',
			'anyone.' : '',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 路由器管理的 JFFS 支援页面
	// ===============================================================
	if (TomatoPage == 'admin-jffs2.asp') {
		Tomato_AdminJffs2 = document.getElementsByClassName('section-title');
		Tomato_AdminJffs2[0].innerHTML = 'JFFS 设置';
		
		Tomato_AdminJffs2 = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_AdminJffs2.length > i ; i++) {
			switch(Tomato_AdminJffs2[i].innerHTML) {
				case 'Enable':
					Tomato_AdminJffs2[i].innerHTML = '启用';
					break;
				case 'Execute When Mounted':
					Tomato_AdminJffs2[i].innerHTML = '挂载后执行';
					break;
			}
		}
		
		var words = {
			'Total / Free Size' : '总容量 / 可用空间',
			'not mounted' : '尚未挂载',
			'Loaded' : '载入完成',
			'Formatted' : '格式化完成',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 路由器管理的 NFS 服务器页面
	// ===============================================================
	if (TomatoPage == 'admin-nfs.asp') {
		Tomato_AdminNfs = document.getElementsByClassName('section-title');
		Tomato_AdminNfs[0].innerHTML = 'NFS 服务器';
		Tomato_AdminNfs[1].innerHTML = '共享设置';
		Tomato_AdminNfs[2].innerHTML = 'NFS 用户端';
		
		Tomato_AdminNfs = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_AdminNfs.length > i ; i++) {
			switch(Tomato_AdminNfs[i].innerHTML) {
				case 'Enable NFS Server':
					Tomato_AdminNfs[i].innerHTML = '启用 NFS 服务器';
					break;
			}
		}
		
		Tomato_AdminNfs = document.getElementsByClassName('co1');
		Tomato_AdminNfs[0].innerHTML = '目录';
		Tomato_AdminNfs = document.getElementsByClassName('co2');
		Tomato_AdminNfs[0].innerHTML = 'IP 地址 / 子网络';
		Tomato_AdminNfs = document.getElementsByClassName('co3');
		Tomato_AdminNfs[0].innerHTML = '存取权限';
		Tomato_AdminNfs = document.getElementsByClassName('co4');
		Tomato_AdminNfs[0].innerHTML = '同步';
		Tomato_AdminNfs = document.getElementsByClassName('co5');
		Tomato_AdminNfs[0].innerHTML = '子目录检查';
		Tomato_AdminNfs = document.getElementsByClassName('co6');
		Tomato_AdminNfs[0].innerHTML = '其他选项';
		
		Tomato_AdminNfs = document.getElementById('_[object HTMLTableElement]_4').childNodes;
		for (var i = 0 ; Tomato_AdminNfs.length > i ; i++) {
			switch(Tomato_AdminNfs[i].innerHTML) {
				case 'Yes':
					Tomato_AdminNfs[i].innerHTML = '是';
					break;
				case 'No':
					Tomato_AdminNfs[i].innerHTML = '否';
					break;
			}
		}
		
		Tomato_AdminNfs = document.getElementById('_[object HTMLTableElement]_5').childNodes;
		for (var i = 0 ; Tomato_AdminNfs.length > i ; i++) {
			switch(Tomato_AdminNfs[i].innerHTML) {
				case 'Yes':
					Tomato_AdminNfs[i].innerHTML = '是';
					break;
				case 'No':
					Tomato_AdminNfs[i].innerHTML = '否';
					break;
			}
		}
		
		var words = {
			'Read/Write' : '读/写',
			'Read only' : '唯读',
			'You can find more information on proper NFS configuration at the following website' : '你可以在下列网站找到更多 NFS 设置的相关信息',
			'If you want to mount an NFS share from other NFS Server, you can use the mount.nfs tool via telnet/ssh.' : '如果你想要挂载其它 NFS 服务器的共享资源, 你可以透过 telnet/ssh 使用 mount.nfs 工具来挂载。',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 路由器管理的简易网管协定页面
	// ===============================================================
	if (TomatoPage == 'admin-snmp.asp') {
		Tomato_AdminSnmp = document.getElementsByClassName('section-title');
		Tomato_AdminSnmp[0].innerHTML = '简易网管协定设置 (SNMP Settings)';
		
		Tomato_AdminSnmp = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_AdminSnmp.length > i ; i++) {
			switch(Tomato_AdminSnmp[i].innerHTML) {
				case 'Enable SNMP':
					Tomato_AdminSnmp[i].innerHTML = '启用简易网管协定';
					break;
				case 'Port':
					Tomato_AdminSnmp[i].innerHTML = '连接端口';
					break;
				case 'Remote access':
					Tomato_AdminSnmp[i].innerHTML = '远端存取';
					break;
				case 'Allowed Remote<br>IP Address':
					Tomato_AdminSnmp[i].innerHTML = '允许远端存取的 IP 地址';
					break;
				case 'Location':
					Tomato_AdminSnmp[i].innerHTML = '实体位置';
					break;
				case 'Contact':
					Tomato_AdminSnmp[i].innerHTML = '联络人';
					break;
				case 'RO Community':
					Tomato_AdminSnmp[i].innerHTML = '唯读社群';
					break;
			}
		}
		
		var words = {
			'optional; ex: "1.1.1.1", "1.1.1.0/24", "1.1.1.1 - 2.2.2.2" or "me.example.com"' : '可选填; 例如: "1.1.1.1", "1.1.1.0/24", "1.1.1.1 - 2.2.2.2" 或 "me.example.com"',
			// 自动更新
			'Auto Refresh' : '自动更新',
			'seconds' : '秒',
			'minutes' : '分钟',
			'minute' : '分钟',
			'Please wait...' : '请等待...',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 路由器管理的系统日志页面
	// ===============================================================
	if (TomatoPage == 'admin-log.asp') {
		Tomato_AdminLog = document.getElementsByClassName('section-title');
		Tomato_AdminLog[0].innerHTML = '系统日志设置';
		Tomato_AdminLog[1].innerHTML = '网站监控设置';
		
		Tomato_AdminLog = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_AdminLog.length > i ; i++) {
			switch(Tomato_AdminLog[i].innerHTML) {
				case 'Log Internally':
					Tomato_AdminLog[i].innerHTML = '记录系统日志';
					break;
				case 'Max size before rotate':
					Tomato_AdminLog[i].innerHTML = '最大覆写空间';
					break;
				case 'Number of rotated logs to keep':
					Tomato_AdminLog[i].innerHTML = '保留覆写日志数量';
					break;
				case 'Custom Log File Path':
					Tomato_AdminLog[i].innerHTML = '自定义日志档案路径';
					break;
				case 'Log To Remote System':
					Tomato_AdminLog[i].innerHTML = '记录至远端系统';
					break;
				case 'Host or IP Address / Port':
					Tomato_AdminLog[i].innerHTML = '主机名或 IP 地址 / 连接端口';
					break;
				case 'Generate Marker':
					Tomato_AdminLog[i].innerHTML = '产生间隔标记';
					break;
				case 'Access Restriction':
					Tomato_AdminLog[i].innerHTML = '连接管制';
					break;
				case 'Cron':
					Tomato_AdminLog[i].innerHTML = '周期指令';
					break;
				case 'DHCP Client':
					Tomato_AdminLog[i].innerHTML = 'DHCP 用户连接';
					break;
				case 'NTP':
					Tomato_AdminLog[i].innerHTML = 'NTP 网络校时';
					break;
				case 'Scheduler':
					Tomato_AdminLog[i].innerHTML = '定时作业';
					break;
				case 'Connection Logging':
					Tomato_AdminLog[i].innerHTML = '记录连接项目';
					break;
				case 'Inbound':
					Tomato_AdminLog[i].innerHTML = '下载连接';
					break;
				case 'Outbound':
					Tomato_AdminLog[i].innerHTML = '上传连接';
					break;
				case 'Limit':
					Tomato_AdminLog[i].innerHTML = '记录限制';
					break;
				case 'Monitor Web Usage':
					Tomato_AdminLog[i].innerHTML = '监控网站浏览记录';
					break;
				case 'Monitor':
					Tomato_AdminLog[i].innerHTML = '监控对象';
					break;
				case 'IP Address(es)':
					Tomato_AdminLog[i].innerHTML = 'IP 地址';
					break;
				case 'Number of Entries to remember':
					Tomato_AdminLog[i].innerHTML = '记录限制';
					break;
				case 'Domains':
					Tomato_AdminLog[i].innerHTML = '造访网站';
					break;
				case 'Searches':
					Tomato_AdminLog[i].innerHTML = '搜寻网站';
					break;
				case 'Daily Backup':
					Tomato_AdminLog[i].innerHTML = '每日备份';
					break;
				case 'Clear Data After Backup':
					Tomato_AdminLog[i].innerHTML = '备份后清除资料';
					break;
				case 'Backup Directory':
					Tomato_AdminLog[i].innerHTML = '备份目录';
					break;
			}
		}
		
		Tomato_AdminLog = document.getElementsByClassName('title indent1');
		for (var i = 0 ; Tomato_AdminLog.length > i ; i++) {
			switch(Tomato_AdminLog[i].innerHTML) {
				case 'Events Logged':
					Tomato_AdminLog[i].innerHTML = '记录事件项目';
					break;
			}
		}
		
		var words = {
			'make sure the directory exists and is writable' : '请确认目录是否存在及拥有写入权限',
			'Every' : '每',
			'Minutes' : '分钟',
			'Hours' : '小时',
			'Hour' : '小时',
			'Days' : '天',
			'Day' : '天',
			'some of the changes will take effect after a restart' : '变更某些事件纪录项目需重新开机才有效',
			'Disabled (recommended)' : '停用 (建议)',
			'Disabled' : '停用',
			'If Blocked By Firewall' : '被防火墙拒绝的连接',
			'If Allowed By Firewall' : '被防火墙允许的连接',
			'Both' : '两者同时记录',
			'messages per minute / 0 for unlimited' : '每分钟讯息数量 / 0 为不限制',
			'All Computers / Devices' : '所有的电脑 / 装置',
			'The Following...' : '以下列表...',
			'All Except...' : '排除以下列表...',
			'ex: "1.1.1.1", "1.1.1.0/24" or "1.1.1.1 - 2.2.2.2"' : '例如: "1.1.1.1", "1.1.1.0/24" 或 "1.1.1.1 - 2.2.2.2"',
			'0 to disable' : '0 为停用',
			'every day at midnight' : '每日午夜',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 路由器管理的定时作业页面
	// ===============================================================
	if (TomatoPage == 'admin-sched.asp') {
		Tomato_AdminSched = document.getElementsByClassName('section-title');
		Tomato_AdminSched[0].innerHTML = '重新开机';
		Tomato_AdminSched[1].innerHTML = '重新连接';
		Tomato_AdminSched[2].innerHTML = '自定义作业 1';
		Tomato_AdminSched[3].innerHTML = '自定义作业 2';
		Tomato_AdminSched[4].innerHTML = '自定义作业 3';
		Tomato_AdminSched[5].innerHTML = '自定义作业 4';
		Tomato_AdminSched[6].innerHTML = '自定义作业 5';
		
		Tomato_AdminSched = document.getElementsByTagName('label');
		for (var i = 0 ; Tomato_AdminSched.length > i ; i++) {
			switch(Tomato_AdminSched[i].innerHTML) {
				case 'Enabled':
					Tomato_AdminSched[i].innerHTML = '启用';
					break;
				case 'Time':
					Tomato_AdminSched[i].innerHTML = '时间';
					break;
				case 'Days':
					Tomato_AdminSched[i].innerHTML = '天数';
					break;
				case 'Command':
					Tomato_AdminSched[i].innerHTML = '指令';
					break;
			}
		}
		
		var words = {
			'make sure the directory exists and is writable' : '请确认目录是否存在及拥有写入权限',
			'Everyday' : '每天',
			'Every hour' : '每小时',
			'Every minute' : '每分钟',
			'Every...' : '自定义间隔时间...',
			'Every' : '每',
			'minutes' : '分钟',
			'hours' : '小时',
			'days' : '天',
			'Sun' : '周日',
			'Mon' : '周一',
			'Tue' : '周二',
			'Wed' : '周三',
			'Thu' : '周四',
			'Fri' : '周五',
			'Sat' : '周六',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 路由器管理的系统指令页面
	// ===============================================================
	if (TomatoPage == 'admin-scripts.asp') {
		Tomato_AdminScripts = document.getElementsByTagName('a');
		for (var i = 0 ; Tomato_AdminScripts.length > i ; i++) {
			switch(Tomato_AdminScripts[i].innerHTML) {
				case 'Init':
					Tomato_AdminScripts[i].innerHTML = '开机起始时';
					break;
				case 'Shutdown':
					Tomato_AdminScripts[i].innerHTML = '关机停止前';
					break;
				case 'Firewall':
					Tomato_AdminScripts[i].innerHTML = '防火墙启动时';
					break;
				case 'WAN Up':
					Tomato_AdminScripts[i].innerHTML = '广域网连接后';
					break;
			}
		}
		
		var words = {
			'Word Wrap' : '自动断行',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 路由器管理的韧体升级页面
	// ===============================================================
	if (TomatoPage == 'admin-upgrade.asp') {
		Tomato_AdminUpgrade = document.getElementsByClassName('section-title');
		Tomato_AdminUpgrade[0].innerHTML = '韧体升级';
		
		var words = {
			'Cannot upgrade if JFFS is enabled.' : 'JFFS 启用时无法更新韧体。',
			'An upgrade may overwrite the JFFS partition currently in use. Before upgrading,' : '韧体升级时会覆写目前使用中的 JFFS 分区。所以在升级前,',
			'please backup the contents of the JFFS partition, disable it, then reboot the router.' : '请先备份 JFFS 分区里的资料, 然后将 JFFS 关闭并将路由器重新开机。',
			'Disable' : '停用',
			'Select the file to use:' : '请选择所要升级的韧体档案',
			'After flashing, erase all data in NVRAM memory' : '升级完成后, 清除 NVRAM 全部资料',
			'Current Version' : '目前版本',
			'Free Memory' : '可用记忆体',
			'aprox. size that can be buffered completely in RAM' : '容量应可完整地将韧体升级缓冲在记忆体里执行',
			'Please wait while the firmware is uploaded & flashed.' : '请等待, 直到韧体上传完毕并升级完成。',
			'Warning:' : '警告:',
			'Do not interrupt this browser or the router!' : '请勿中断浏览器或关闭路由器电源!',
		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// Tomato 关于 Tomato 页面
	// ===============================================================
	if (TomatoPage == 'about.asp') {
		var words = {
			'Tomato Firmware' : 'Tomato 韧体',
			'IPv6 support' : 'IPv6 支援',
			'Linux kernel' : 'Linux 核心',
			'and Broadcom Wireless Driver' : '及 Broadcom 无线驱动',
			'updates' : '更新',
			'support for additional router models, dual-band and Wireless-N mode.' : '支援更多路由器型号, 无线双频及无线 N 模式。',
			'Copyright (C)' : '版权所有 ©',
			'OpenVPN integration and GUI,' : 'OpenVPN 整合及使用者界面:',
			'features:' : '提供的功能:',
			'feature:' : '提供的功能:',
			'Features:' : '提供的功能:',
			'NFS utils integration and GUI' : 'NFS 工具整合及使用者界面',
			'Custom log file path' : '自定义日志档案路径',
			'SD-idle tool integration for kernel 2.6' : 'Linux 核心 2.6 版的 SD-idle 工具整合',
			'SNMP integration and GUI' : '简易网管协定整合及使用者界面 (SNMP)',
			'DNScrypt-proxy 1.0 integration and GUI' : 'DNS 加密代理 1.0 整合及使用者界面 (DNScrypt-proxy)',
			'TOR Project integration and GUI' : '洋葱路由整合及使用者界面 (TOR Project)',
			'TomatoAnon project integration and GUI' : '匿名回报整合及使用者界面 (TomatoAnon Project)',
			'TomatoThemeBase project integration and GUI' : '蕃茄线上主题整合及使用者界面 (TomatoThemeBase project)',
			'Ethernet Ports State' : '乙太网络端口状态',
			'Extended MOTD (written by @Monter, modified by @Shibby)' : '扩展版今日讯息 (Extended MOTD, 作者: @Monter, 修改: @Shibby)',
			'Webmon Backup Script' : '网站监控备份脚本',
			'OpenVPN enhancements & username/password only authentication' : 'OpenVPN 增强 & 仅用帐号 / 密码认证',
			'PPTP VPN Client integration and GUI' : 'PPTP VPN 用户端整合及使用者界面',
			'Openvpn username/password verify feature and configure GUI.' : 'OpenVPN 帐号 / 密码验证功能及设置的使用者界面',
			'Extended Sysinfo' : '扩展系统信息功能',
			'Captive Portal. (Based in NocatSplash)' : '网页认证功能 (基于 NocatSplash)',
			'QOS-detailed & ctrate filters' : 'QoS 连接列表 & 传输速率过滤功能',
			'Realtime bandwidth monitoring of LAN clients' : '网络界面的即时带宽监控功能',
			'Static ARP binding' : '静态 ARP 绑定功能',
			'VLAN administration GUI' : '虚拟区域网络管理的使用者界面 (VLAN)',
			'Multiple LAN support integration and GUI' : '多重区域网络支援整合及使用者界面 (Multiple LAN)',
			'Multiple/virtual SSID support (experimental)' : '多重 / 虚拟 SSID 支援 (尚在研究)',
			'UDPxy integration and GUI' : 'UDPxy 整合及使用者界面',
			'PPTP Server integration and GUI' : 'PPTP 服务器整合及使用者界面',
			'Configurable QOS class names' : '设置 QoS 分级名称功能',
			'Comprehensive QOS rule examples set by default' : '默认的 QoS 分级管制规则范例',
			'TC-ATM overhead calculation - patch by tvlz' : 'TC-ATM 覆改值计算 - 升级: tvlz',
			'GPT support for HDD by Yaniv Hamo' : '支援使用 GPT 分割表的硬碟, 作者: Yaniv Hamo',
			'Tools-System refresh timer' : '系统更新计时器工具',
			'IMQ based QOS Ingress' : '基于 IMQ 的 QoS 入口',
			'Incoming Class Bandwidth pie chart' : '下载的带宽分布图',
			'Revised IP/MAC Bandwidth Limiter' : '修订 IP/MAC 带宽限制',
			'Based on' : '基于',
			'Built on' : '建立在',
			'Thanks to everyone who risked their routers, tested, reported bugs, made' : '感谢冒险提供路由器, 帮忙测试, 回报错误,',
			'suggestions and contributed to this project.' : '提供建议及对这个计划有贡献的每个人。',
	

		};
		Replaceword();
		setTimeout(RefreshPage, 200);
	}


	// 等待 VPN 通道的相关页面资料建立后再行取代文字
	// ===============================================================
	function ReplaceVpn() {
		switch(TomatoPage) {
			case 'vpn-pptp-server.asp':
				Tomato_Ipt = document.getElementsByClassName('co1');
				Tomato_Ipt[0].innerHTML = '帐号';
				Tomato_Ipt = document.getElementsByClassName('co2');
				Tomato_Ipt[0].innerHTML = '密码';
				break;
		}
	}


	// 等待网络品质管理相关页面资料建立后再行取代文字
	// ===============================================================
	function ReplaceQos() {
		switch(TomatoPage) {
			case 'qos-detailed.asp':
				Tomato_Qos = document.getElementsByClassName('co1');
				Tomato_Qos[0].innerHTML = '通讯协定';
				Tomato_Qos = document.getElementsByClassName('co2');
				Tomato_Qos[0].innerHTML = '来源地址';
				Tomato_Qos = document.getElementsByClassName('co3');
				Tomato_Qos[0].innerHTML = '来源端口';
				Tomato_Qos = document.getElementsByClassName('co4');
				Tomato_Qos[0].innerHTML = '目的地址';
				Tomato_Qos = document.getElementsByClassName('co5');
				Tomato_Qos[0].innerHTML = '目的端口';
				
				Tomato_Qos = document.getElementsByClassName('co6');
				for (var i = 0 ; Tomato_Qos.length > i ; i++) {
					switch(Tomato_Qos[i].innerHTML) {
						case 'Class':
							Tomato_Qos[i].innerHTML = '级别';
							break;
						case 'Unclassified':
							Tomato_Qos[i].innerHTML = '未有级别';
							break;
						case 'Service':
							Tomato_Qos[i].innerHTML = '网络服务';
							break;
						case 'VOIP/Game':
							Tomato_Qos[i].innerHTML = '网络电话<br>网络游戏';
							break;
						case 'Media':
							Tomato_Qos[i].innerHTML = '网络多媒体';
							break;
						case 'Remote':
							Tomato_Qos[i].innerHTML = '远端连接';
							break;
						case 'WWW':
							Tomato_Qos[i].innerHTML = '网页';
							break;
						case 'Mail':
							Tomato_Qos[i].innerHTML = '电子邮件';
							break;
						case 'Messenger':
							Tomato_Qos[i].innerHTML = '即时通讯';
							break;
						case 'FileXfer':
							Tomato_Qos[i].innerHTML = '档案传输';
							break;
						case 'P2P/Bulk':
							Tomato_Qos[i].innerHTML = 'P2P 传输<br>大量传输';
							break;
						case 'Crawl':
							Tomato_Qos[i].innerHTML = '其它/限速';
							break;
					}
				}
		
				Tomato_Qos = document.getElementsByClassName('co7');
				Tomato_Qos[0].innerHTML = '规则';
				Tomato_Qos = document.getElementsByClassName('co8');
				Tomato_Qos[0].innerHTML = '上传位元组';
				Tomato_Qos = document.getElementsByClassName('co9');
				Tomato_Qos[0].innerHTML = '下载位元组';
				
				Tomato_Qos = document.getElementsByClassName('co7');
				for (var i = 0 ; Tomato_Qos.length > i ; i++) {
					Tomato_Qos[i].style.width = '22px';
				}
				break;
			case 'qos-ctrate.asp':
				Tomato_Qos = document.getElementsByClassName('co1');
				Tomato_Qos[0].innerHTML = '通讯协定';
				Tomato_Qos = document.getElementsByClassName('co2');
				Tomato_Qos[0].innerHTML = '来源地址';
				Tomato_Qos = document.getElementsByClassName('co3');
				Tomato_Qos[0].innerHTML = '来源端口';
				Tomato_Qos = document.getElementsByClassName('co4');
				Tomato_Qos[0].innerHTML = '目的地址';
				Tomato_Qos = document.getElementsByClassName('co5');
				Tomato_Qos[0].innerHTML = '目的端口';
				Tomato_Qos = document.getElementsByClassName('co6');
				Tomato_Qos[0].innerHTML = '上传速率';
				Tomato_Qos = document.getElementsByClassName('co7');
				Tomato_Qos[0].innerHTML = '下载速率';
				break;
		}
	}

	// 等待进阶设置相关页面资料建立后再行取代文字
	// ===============================================================
	function ReplaceAdvanced() {
		switch(TomatoPage) {
			case 'advanced-access.asp':
				Tomato_Advanced = document.getElementsByClassName('co1');
				Tomato_Advanced[0].innerHTML = '启用';
				Tomato_Advanced = document.getElementsByClassName('co2');
				Tomato_Advanced[0].innerHTML = '来源';
				Tomato_Advanced = document.getElementsByClassName('co3');
				Tomato_Advanced[0].innerHTML = '来源地址';
				Tomato_Advanced = document.getElementsByClassName('co4');
				Tomato_Advanced[0].innerHTML = '目的';
				Tomato_Advanced = document.getElementsByClassName('co5');
				Tomato_Advanced[0].innerHTML = '目的地址';
				Tomato_Advanced = document.getElementsByClassName('co6');
				Tomato_Advanced[0].innerHTML = '描述';
				break;
			case 'advanced-wlanvifs.asp':
				Tomato_Advanced = document.getElementsByClassName('co1');
				Tomato_Advanced[0].innerHTML = '界面';
				Tomato_Advanced = document.getElementsByClassName('co2');
				Tomato_Advanced[0].innerHTML = '启用';
				Tomato_Advanced = document.getElementsByClassName('co3');
				Tomato_Advanced[0].innerHTML = '无线名称 (SSID)';
				Tomato_Advanced = document.getElementsByClassName('co4');
				Tomato_Advanced[0].innerHTML = '模式';
				Tomato_Advanced = document.getElementsByClassName('co5');
				Tomato_Advanced[0].innerHTML = '桥接';
				
				var f = unsafeWindow.tabSelect;
				unsafeWindow.tabSelect = function(name) {
					f(name);
					Replaceword();
				}
				break;
		}
	}


	// 等待IP 流量监控相关页面资料建立后再行取代文字
	// ===============================================================
	function ReplaceIpt() {
		switch(TomatoPage) {
			case 'ipt-details.asp':
				Tomato_Ipt = document.getElementsByClassName('co1');
				Tomato_Ipt[0].innerHTML = '主机';
				Tomato_Ipt = document.getElementsByClassName('co2');
				Tomato_Ipt[0].innerHTML = '下载速率';
				Tomato_Ipt = document.getElementsByClassName('co3');
				Tomato_Ipt[0].innerHTML = '上传速率';
				Tomato_Ipt = document.getElementsByClassName('co4');
				Tomato_Ipt[0].innerHTML = 'TCP 封包 (入/出)';
				Tomato_Ipt = document.getElementsByClassName('co5');
				Tomato_Ipt[0].innerHTML = 'UDP 封包 (入/出)';
				Tomato_Ipt = document.getElementsByClassName('co6');
				Tomato_Ipt[0].innerHTML = 'ICMP 封包 (入/出)';
				Tomato_Ipt = document.getElementsByClassName('co7');
				Tomato_Ipt[0].innerHTML = 'TCP 连接数';
				Tomato_Ipt = document.getElementsByClassName('co8');
				Tomato_Ipt[0].innerHTML = 'UDP 连接数';
				break;
			case 'ipt-daily.asp':
				Tomato_Ipt = document.getElementsByClassName('co1');
				Tomato_Ipt[0].innerHTML = '日期';
				Tomato_Ipt = document.getElementsByClassName('co2');
				Tomato_Ipt[0].innerHTML = '主机';
				Tomato_Ipt = document.getElementsByClassName('co3');
				Tomato_Ipt[0].innerHTML = '下载';
				Tomato_Ipt = document.getElementsByClassName('co4');
				Tomato_Ipt[0].innerHTML = '上传';
				Tomato_Ipt = document.getElementsByClassName('co5');
				Tomato_Ipt[0].innerHTML = '合计';
				break;
			case 'ipt-monthly.asp':
				Tomato_Ipt = document.getElementsByClassName('co1');
				Tomato_Ipt[0].innerHTML = '日期';
				Tomato_Ipt = document.getElementsByClassName('co2');
				Tomato_Ipt[0].innerHTML = '主机';
				Tomato_Ipt = document.getElementsByClassName('co3');
				Tomato_Ipt[0].innerHTML = '下载';
				Tomato_Ipt = document.getElementsByClassName('co4');
				Tomato_Ipt[0].innerHTML = '上传';
				Tomato_Ipt = document.getElementsByClassName('co5');
				Tomato_Ipt[0].innerHTML = '合计';
				break;
		}
	}


	// 等待带宽监控相关页面资料建立后再行取代文字
	// ===============================================================
	function ReplaceBwm() {
		Tomato_Bwm = document.getElementsByClassName('rtitle');
		for (var i = 0 ; Tomato_Bwm.length > i ; i++) {
			switch(Tomato_Bwm[i].innerHTML) {
				case 'Date':
					Tomato_Bwm[i].innerHTML = '日期';
					break;
				case 'Total':
					Tomato_Bwm[i].innerHTML = '合计';
					break;
			}
		}
		
		Tomato_Bwm = document.getElementsByClassName('dl');
		for (var i = 0 ; Tomato_Bwm.length > i ; i++) {
			switch(Tomato_Bwm[i].innerHTML) {
				case 'Download':
					Tomato_Bwm[i].innerHTML = '下载';
					break;
			}
		}

		Tomato_Bwm = document.getElementsByClassName('ul');
		for (var i = 0 ; Tomato_Bwm.length > i ; i++) {
			switch(Tomato_Bwm[i].innerHTML) {
				case 'Upload':
					Tomato_Bwm[i].innerHTML = '上传';
					break;
			}
		}

		Tomato_Bwm = document.getElementsByClassName('total');
		for (var i = 0 ; Tomato_Bwm.length > i ; i++) {
			switch(Tomato_Bwm[i].innerHTML) {
				case 'Total':
					Tomato_Bwm[i].innerHTML = '合计';
					break;
			}
		}
		
		var f = unsafeWindow.redraw;
		unsafeWindow.redraw = function(redraw) {
			f();
			Tomato_Bwm = document.getElementsByClassName('rtitle');
			for (var i = 0 ; Tomato_Bwm.length > i ; i++) {
				switch(Tomato_Bwm[i].innerHTML) {
					case 'Date':
						Tomato_Bwm[i].innerHTML = '日期';
						break;
					case 'Total':
						Tomato_Bwm[i].innerHTML = '合计';
						break;
				}
			}
			
			Tomato_Bwm = document.getElementsByClassName('dl');
			for (var i = 0 ; Tomato_Bwm.length > i ; i++) {
				switch(Tomato_Bwm[i].innerHTML) {
					case 'Download':
						Tomato_Bwm[i].innerHTML = '下载';
						break;
				}
			}

			Tomato_Bwm = document.getElementsByClassName('ul');
			for (var i = 0 ; Tomato_Bwm.length > i ; i++) {
				switch(Tomato_Bwm[i].innerHTML) {
					case 'Upload':
						Tomato_Bwm[i].innerHTML = '上传';
						break;
				}
			}
			
			Tomato_Bwm = document.getElementsByClassName('total');
			for (var i = 0 ; Tomato_Bwm.length > i ; i++) {
				switch(Tomato_Bwm[i].innerHTML) {
					case 'Total':
						Tomato_Bwm[i].innerHTML = '合计';
						break;
				}
			}
			Replaceword();
		}
		Replaceword();
	}


	// 切换显示/隐藏脚本时重整页面文字
	// ===============================================================
	function RefreshPage() {
		switch(TomatoPage) {
			case 'basic-ddns.asp':
				var f = unsafeWindow.verifyFields;
				unsafeWindow.verifyFields = function(focused, quiet) {
					f(focused, quiet);
					Replaceword();
					Tomato_RefreshPage = document.getElementsByTagName('label');
					for (var i = 0 ; Tomato_RefreshPage.length > i ; i++) {
						switch(Tomato_RefreshPage[i].innerHTML) {
							case 'MX':
								Tomato_RefreshPage[i].innerHTML = 'MX 记录';
								break;
						}
					}
				}
				break;
			case 'advanced-ctnf.asp':
				var f = unsafeWindow.clicked;
				unsafeWindow.clicked = function() {
					f();
					Replaceword();
				}
				break;
			default:
				var f = unsafeWindow.toggleVisibility;
				unsafeWindow.toggleVisibility = function(whichone) {
					f(whichone);
					Replaceword();
				}
				break;
		}
		Replaceword();
	}


	// 切换显示/隐藏脚本时重整页面文字
	// ===============================================================
	function ReplaceButtonValue() {
		Tomato_ButtonValue = document.getElementsByTagName('input');
		for (var i = 0 ; Tomato_ButtonValue.length > i ; i++) {
			switch(Tomato_ButtonValue[i].value) {
				case 'Connect':
					Tomato_ButtonValue[i].value = '连接';
					break;
				case 'Disconnect':
					Tomato_ButtonValue[i].value = '断线';
					break;
				case 'Enable':
					Tomato_ButtonValue[i].value = '启用';
					break;
				case 'Disable':
					Tomato_ButtonValue[i].value = '停用';
					break;
				case 'Refresh':
					Tomato_ButtonValue[i].value = '更新';
					break;
				case 'Stop':
					Tomato_ButtonValue[i].value = '停止';
					break;
				case 'Add':
					Tomato_ButtonValue[i].value = '新增';
					break;
				case 'Delete':
					Tomato_ButtonValue[i].value = '删除';
					break;
				case 'OK':
					Tomato_ButtonValue[i].value = '确定';
					break;
				case 'Cancel':
					Tomato_ButtonValue[i].value = '取消';
					break;
				case 'Save':
					Tomato_ButtonValue[i].value = '储存';
					break;
				case 'Cancel':
					Tomato_ButtonValue[i].value = '取消';
					break;
				case 'Measure':
					Tomato_ButtonValue[i].value = '测量';
					break;
				case 'Find':
					Tomato_ButtonValue[i].value = '搜寻';
					break;
				case 'Trace':
					Tomato_ButtonValue[i].value = '追踪';
					break;
				case 'Execute':
					Tomato_ButtonValue[i].value = '执行';
					break;
				case 'Wake Up':
					Tomato_ButtonValue[i].value = '唤醒';
					break;
				case 'Random':
					Tomato_ButtonValue[i].value = '乱数';
					break;
				case 'Drop Idle':
					Tomato_ButtonValue[i].value = '清除超时连接';
					break;
				case 'Default':
					Tomato_ButtonValue[i].value = '默认值';
					break;
				case 'Clone PC':
					Tomato_ButtonValue[i].value = '复制电脑网卡 MAC 地址';
					break;
				case 'Overview':
					Tomato_ButtonValue[i].value = '概观';
					break;
				case 'Scan':
					Tomato_ButtonValue[i].value = '扫描';
					break;
				case 'Generate':
					Tomato_ButtonValue[i].value = '产生';
					break;
				case 'Delete All':
					Tomato_ButtonValue[i].value = '全部删除';
					break;
				case 'Delete...':
					Tomato_ButtonValue[i].value = '删除...';
					break;
				case 'Zoom Graphs':
					Tomato_ButtonValue[i].value = '缩放图表';
					break;
				case 'Upload':
					Tomato_ButtonValue[i].value = '上传';
					break;
				case 'Start Now':
					Tomato_ButtonValue[i].value = '立即启动';
					break;
				case 'Stop Now':
					Tomato_ButtonValue[i].value = '立即停止';
					break;
				case 'Backup':
					Tomato_ButtonValue[i].value = '备份';
					break;
				case 'Restore':
					Tomato_ButtonValue[i].value = '还原';
					break;
				case 'Format / Erase...':
					Tomato_ButtonValue[i].value = '格式化 / 清除...';
					break;
				case 'Upgrade':
					Tomato_ButtonValue[i].value = '升级';
					break;
			}
		}
	}


	// Replace Text On Webpages  by JoeSimmons
	// ===============================================================
	function Replaceword() {
		ReplaceButtonValue();
		'use strict';
		/*
			NOTE: 
				You can use \\* to match actual asterisks instead of using it as a wildcard!
				The examples below show a wildcard in use and a regular asterisk replacement.
		*/
    
		//////////////////////////////////////////////////////////////////////////////
		// This is where the real code is
		// Don't edit below this
		//////////////////////////////////////////////////////////////////////////////

		var regexs = [], replacements = [],
			tagsWhitelist = ['PRE', 'BLOCKQUOTE', 'CODE', 'INPUT', 'BUTTON', 'TEXTAREA'],
			rIsRegexp = /^\/(.+)\/([gim]+)?$/,
			word, text, texts, i, userRegexp;

		// prepareRegex by JoeSimmons
		// used to take a string and ready it for use in new RegExp()
		function prepareRegex(string) {
			return string.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g, '\\$1');
		}

		// function to decide whether a parent tag will have its text replaced or not
		function isTagOk(tag) {
			return tagsWhitelist.indexOf(tag) === -1;
		}

		delete words[''];	// so the user can add each entry ending with a comma,
										// I put an extra empty key/value pair in the object.
										// so we need to remove it before continuing

		// convert the 'words' JSON object to an Array
		for (word in words) {
			if ( typeof word === 'string' && words.hasOwnProperty(word) ) {
				userRegexp = word.match(rIsRegexp);

				// add the search/needle/query
				if (userRegexp) {
					regexs.push(
						new RegExp(userRegexp[1], 'g')
					);
				} else {
					regexs.push(
						new RegExp(prepareRegex(word).replace(/\\?\*/g, function (fullMatch) {
						return fullMatch === '\\*' ? '*' : '[^ ]*';
						}), 'g')
					);
				}

				// add the replacement
				replacements.push( words[word] );
			}
		}

		// do the replacement
		texts = document.evaluate('//body//text()[ normalize-space(.) != "" ]', document, null, 6, null);
		for (i = 0; text = texts.snapshotItem(i); i += 1) {
			if ( isTagOk(text.parentNode.tagName) ) {
				regexs.forEach(function (value, index) {
					text.data = text.data.replace( value, replacements[index] );
				});
			}
		}
	}