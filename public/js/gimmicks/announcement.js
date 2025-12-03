(function($) {
	'use strict';

	var announcementGimmick = {
		name: 'announcement',
		load: function() {
			$.md.stage('bootstrap').subscribe(function(done) {
				loadAndDisplayAnnouncement();
				done();
			});
		}
	};

	$.md.registerGimmick(announcementGimmick);

	/**
	 * 加载并显示公告内容
	 */
	function loadAndDisplayAnnouncement() {
		var announcementUrl = 'announcement.md';

		// 发送请求获取公告内容
		$.ajax({
			url: announcementUrl,
			type: 'GET',
			dataType: 'text',
			cache: false,
			success: function(data) {
				// 检查内容是否非空
				if (data && data.trim().length > 0) {
					displayAnnouncement(data);
				}
			},
			error: function(xhr, status, error) {
				// 文件不存在或其他错误，静默处理
				console.log('未找到公告文件:', announcementUrl);
			}
		});
	}

	/**
	 * 在md-body内部顶部显示公告
	 */
	function displayAnnouncement(content) {
		var $mdBody = $('#md-body');

		if ($mdBody.length === 0) {
			console.warn('未找到id="md-body"的元素');
			return;
		}

		// 移除可能已存在的公告（避免重复）
		$('#md-announcement').remove();

		// 创建公告容器
		var $announcementContainer = $('<div>', {
			id: 'md-announcement',
			class: 'md-announcement alert alert-warning alert-dismissible',
			role: 'alert'
		});

		// 添加关闭按钮
		var $closeButton = $('<button>', {
			type: 'button',
			class: 'close',
			'aria-label': '关闭',
			html: '<span aria-hidden="true">&times;</span>',
			click: function() {
				$announcementContainer.remove();
			}
		});

		// 转换Markdown为HTML
		var htmlContent = convertMarkdownToHtml(content);

		// 创建内容容器
		var $contentDiv = $('<div>', {
			class: 'announcement-content',
			html: htmlContent
		});

		// 组装元素
		$announcementContainer.append($closeButton);
		$announcementContainer.append($contentDiv);

		// 作为第一个元素插入到md-body内部
		$mdBody.prepend($announcementContainer);

		// 添加自定义样式
		addAnnouncementStyles();

		console.log('公告已添加到md-body内部顶部');
	}

	/**
	 * 简单的Markdown转HTML转换器
	 */
	function convertMarkdownToHtml(markdown) {
		if (typeof marked !== 'undefined') {
			return marked.parse(markdown);
		}

		// 简单转换
		var html = markdown
			.replace(/^# (.*$)/gim, '<h4>$1</h4>')
			.replace(/^## (.*$)/gim, '<h5>$1</h5>')
			.replace(/^### (.*$)/gim, '<h6>$1</h6>')
			.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
			.replace(/\*(.*?)\*/g, '<em>$1</em>')
			.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
			.replace(/\n\n/g, '</p><p>')
			.replace(/\n/g, '<br>');

		return '<p>' + html + '</p>';
	}

	/**
	 * 添加公告样式
	 */
	function addAnnouncementStyles() {
		if ($('#md-announcement-styles').length > 0) return;

		var styles = `
			<style id="md-announcement-styles">
				/* 公告容器样式 */
				#md-announcement {
					position: relative;
					margin: 0 0 30px 0 !important;
					padding: 20px 25px !important;
					border: 1px solid #ffeaa7;
					border-left: 5px solid #f0ad4e;
					border-radius: 6px;
					background: linear-gradient(to right, #fff3cd, #fff8e1);
					color: #856404;
					box-shadow: 0 3px 10px rgba(0,0,0,0.08);
					animation: announcementSlideIn 0.5s ease-out;
				}

				/* 确保在md-body内部正确显示 */
				#md-body > #md-announcement:first-child {
					margin-top: 0 !important;
				}

				/* 关闭按钮样式 */
				#md-announcement .close {
					position: absolute;
					top: 10px;
					right: 15px;
					color: #856404;
					opacity: 0.7;
					font-size: 24px;
					padding: 0;
					background: transparent;
					border: none;
					cursor: pointer;
				}

				#md-announcement .close:hover {
					opacity: 1;
					color: #d9534f;
				}

				/* 内容样式 */
				#md-announcement .announcement-content {
					margin-right: 30px;
				}

				#md-announcement .announcement-content h4,
				#md-announcement .announcement-content h5,
				#md-announcement .announcement-content h6 {
					margin-top: 0;
					margin-bottom: 15px;
					color: #856404;
					border-bottom: 2px solid #ffeaa7;
					padding-bottom: 8px;
				}

				#md-announcement .announcement-content p {
					margin-bottom: 10px;
					line-height: 1.6;
				}

				#md-announcement .announcement-content p:last-child {
					margin-bottom: 0;
				}

				#md-announcement .announcement-content a {
					color: #d9534f;
					text-decoration: underline;
					font-weight: bold;
				}

				#md-announcement .announcement-content a:hover {
					color: #c9302c;
					text-decoration: none;
				}

				#md-announcement .announcement-content ul,
				#md-announcement .announcement-content ol {
					padding-left: 25px;
					margin: 10px 0;
				}

				#md-announcement .announcement-content li {
					margin-bottom: 5px;
				}

				#md-announcement .announcement-content strong {
					color: #d9534f;
				}

				/* 动画效果 */
				@keyframes announcementSlideIn {
					from {
						opacity: 0;
						transform: translateY(-20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				/* 响应式调整 */
				@media (max-width: 768px) {
					#md-announcement {
						margin: 0 0 20px 0 !important;
						padding: 15px !important;
					}

					#md-announcement .close {
						top: 5px;
						right: 10px;
						font-size: 20px;
					}

					#md-announcement .announcement-content {
						margin-right: 25px;
					}
				}
			</style>
		`;

		$('head').append(styles);
	}

}(jQuery));
