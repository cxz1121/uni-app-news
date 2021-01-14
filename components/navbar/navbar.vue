<template>
	<view>
		<view class="nav-bar">
			<view class="nav-bar-fixed">
				<view :style="{height: statusBarHeight + 'px'}"></view>
				<view class="nav-bar-content">
					<div :style="{height: navBarHeight + 'px', marginBottom: navBarTop + 'px'}" class="nav-bar-search">
						<!-- <div class="nav-bar-search-icon iconfont icon-sousuo"></div> -->
						<uni-icons type="search" size="16" color="999" style="margin-left: 20rpx;"></uni-icons>
						<div class="nav-bar-search-text">uni-app</div>
					</div>
				</view>
			</view>
		</view>
		<view :style="{height: (statusBarHeight+45) + 'px' }"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 0 ,
				navBarHeight: 30 , 
				navBarTop: 0 ,
			}
		},
		created() {
			//#ifndef H5 || APP-PLUS || MP-ALIPAY
			const info = uni.getSystemInfoSync();
			this.statusBarHeight = info.statusBarHeight;
			
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			//胶囊高度 = （胶囊底 - 状态栏高度） - （胶囊顶 - 状态栏高度）
			const menuButtonHeight = (menuButtonInfo.bottom - info.statusBarHeight) - (menuButtonInfo.top - info.statusBarHeight);
			this.navBarHeight = menuButtonHeight;
			this.navBarTop = menuButtonInfo.top - info.statusBarHeight;
			//#endif
		}
		,
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.nav-bar {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		width: 100%;
		background-color: #FB7299;
		.nav-bar-fixed {
			width: 100%;
			box-sizing: border-box;
			.nav-bar-content{
				height: 90rpx;
				padding: 0 20rpx;
				display: flex;
				align-items: center;
				line-height: 60rpx;
				.nav-bar-search {
					display: flex;
					align-items: center;
					//#ifdef MP-WEIXIN
					width: 70%;
					//#endif
					//#ifndef MP-WEIXIN
					width: 100%;
					//#endif
					background-color: #fff;
					border-radius: 30rpx;
					.nav-bar-search-icon {
						// border: 1px solid #FB7299;
						// border-radius: 20rpx;
						// width: 20rpx;
						// height: 20rpx;
						margin-left: 20rpx;
					}
					.nav-bar-search-text {
						// color: #FB7299;
						font-size: 28rpx;
						margin-left: 16rpx;
					}
				}
			}
		}
	}
</style>
