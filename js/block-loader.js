var BlockLoader = function () {
    var Model = {
        target: null,
        style: 0,
        loader: null,
        loaderW: 0,
        loaderH: 0,
        inner: null,
        innerW: 0,
        innerH: 0
    };

    var initLoader = function () {
        Model.loader = $('<div class="loader" style="width: 100%; height: 100%; top: 0; left: 0;"></div>');
        Model.inner = $('<div style="position:relative;"></div>');
        switch (Model.style) {
            case 0: initStyle0(); break;
            case 1: initStyle1(); break;
            case 2: initStyle2(); break;
            case 3: initStyle3(); break;
            case 4: initStyle4(); break;
            case 5: initStyle5(); break;
            case 6: initStyle6(); break;
        }
        Model.inner.css("top", getTop()).css("left", getLeft());
        Model.loader.append(Model.inner);
        Model.loader.append('<div style="clear: both;"></div>');
        Model.target.append(Model.loader);
        Model.loader.fadeIn();
    }, initStyle0 = function () {
        Model.innerW = 70;
        Model.innerH = 20;
        Model.inner.addClass("loader-inner ball-pulse");
        Model.inner.append(getChildren(3));
    }, initStyle1 = function () {
        Model.innerW = 36;
        Model.innerH = 20;
        Model.inner.addClass("loader-inner ball-clip-rotate-pulse");
        Model.inner.append(getChildren(2));
    }, initStyle2 = function () {
        Model.innerW = 60;
        Model.innerH = 50;
        Model.inner.addClass("loader-inner line-scale");
        Model.inner.append(getChildren(5));
    }, initStyle3 = function () {
        Model.innerW = 50;
        Model.innerH = 50;
        Model.inner.addClass("loader-inner line-scale-party");
        Model.inner.append(getChildren(4));
    }, initStyle4 = function () {
        Model.innerW = 60;
        Model.innerH = 30;
        Model.inner.addClass("loader-inner ball-scale-multiple");
        Model.inner.append(getChildren(3));
    }, initStyle5 = function () {
        Model.innerW = 50;
        Model.innerH = 50;
        Model.inner.addClass("loader-inner ball-spin-fade-loader");
        Model.inner.append(getChildren(8));
    }, initStyle6 = function () {
        Model.innerW = 120;
        Model.innerH = 50;
        Model.inner.addClass("loader-inner pacman");
        Model.inner.append(getChildren(5));
    };

    var getTop = function () {
        return (Model.loaderH - Model.innerH) / 2;
    }, getLeft = function () {
        return (Model.loaderW - Model.innerW) / 2;
    }, getChildren = function (num) {
        var node = '';
        for (var i = 0; i < num; i++) {
            node += '<div></div>';
        }
        return node;
    };

    return {
        loaderTarget: function (dom) {
            if (dom) {
                Model.target = $(dom);
            } else {
                Model.target = $(window);
            }
            Model.loaderW = Model.target.width();
            Model.loaderH = Model.target.height();
            return this;
        },
        loaderStyle: function (laoder_style) {
            if (laoder_style >= 0 && laoder_style <= 6) {
                Model.style = laoder_style;
            }
            return this;
        },
        showLoader: function () {
            initLoader();
            return this;
        },
        hideLoader: function () {
            Model.loader.fadeOut();
            Model.target.remove(Model.loader);
            return this;
        }
    }
};