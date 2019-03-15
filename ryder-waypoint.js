$.fn.ryderCool = function(option) {
	return this.each(function() {
		var $this = $(this);

		var deFault = {
			hook: 0.9,
			repeat: false,
			enter_check: true,
			leave_check: true,
			count: 0,
			enter() {},
			leave() {}
		};

		var setting = $.extend(deFault, option);

		function ryderScrolling() {
			var scrollTop = $(window).scrollTop(),
				elementOffset = $this.offset().top,
				distance = (elementOffset - scrollTop),
				windowHeight = $(window).height(),
				breakPoint = windowHeight * setting.hook,
				leavePoint = $this.height() - windowHeight * (1 - setting.hook);

			if (distance > breakPoint || distance < -leavePoint) {

				if (setting.count >= 1) {
					setting.enter_check = setting.repeat;
				}

				setting.leave_check && setting.leave($this);
				setting.leave_check = false;

			}else if (distance < breakPoint) {

				setting.enter_check && setting.enter($this);
				setting.enter_check && setting.count++;
				setting.enter_check = false;
				setting.leave_check = true;
			}
		}

		$(window).on("scroll", ryderScrolling).trigger("scroll");
	});
};