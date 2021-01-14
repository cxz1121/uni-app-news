<template>
	<view>
		<view class="tab">
			<scroll-view class="tab-scroll" scroll-x>
				<view class="scroll-box">
					<view v-for="item in list" class="tab-scroll-item">{{item.name}}</view>
				</view>
			</scroll-view>
			<view class="tab-icon">
				<uni-icons type="gear" size="22" color="#666"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				
			};
		},
		
	}
</script>

<style lang="scss">
	.tab {
		width: 100%;
		display: flex;
		box-sizing: border-box;
		background-color: #fff;
		border: 1px solid #e7e7e7;
		.tab-scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
			.scroll-box {
				height: 70rpx;
				font-size: 14px;
				display: flex;
				align-items: center;
				flex-wrap: nowrap;
				box-sizing: border-box;
				.tab-scroll-item {
					flex-shrink: 0;
					padding: 0 20rpx;
				}
			}
		}
		
		.tab-icon {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 80rpx;
			&::before {
				content: '';
				position: absolute;
				top: 12px;
				bottom: 12px;
				left: 0;
				width: 1px;
				background-color: #ddd;
			}
		}
	}
</style>
