// $(function () {
	window.onload=function  () {
		
	
		var mySwiper = new Swiper ('.swiper-container', {
            
			direction:'horizontal',// 轮播图的方向，horizontal/vertical
			
			// 切换效果
			//  "slide"（普通切换、默认）
			//  "fade"（淡入）
			//  "cube"（方块）
			//  "coverflow"（3d流）
			//  "flip"（3d翻转）
			effect: 'fade',
			autoplay: true,// 自动播放
			loop: true,// 循环模式选项
			speed: 2000,// 播放的速度
            
            // 分页器
			pagination: {
				el: '.swiper-pagination',
				clickable: true//点击跳转
			},
            
			// 前进后退按钮
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			
			// 延迟加载
			// lazy: {
			// 	loadPrevNext: true
			// },
			
			// 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
			// 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
			// 操作包括触碰，拖动，点击pagination等
			autoplayDisableOnInteraction : false,

			// 进度条
			// scrollbar: {
			// el: '.swiper-scrollbar',
			// },
		})
	}
// })