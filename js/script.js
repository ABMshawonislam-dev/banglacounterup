 // find viewport start
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        // bangla to englisg number converter start
        let banglaNumbers = {
            0: "০",
            1: "১",
            2: "২",
            3: "৩",
            4: "৪",
            5: "৫",
            6: "৬",
            7: "৭",
            8: "৮",
            9: "৯"
        };

        String.prototype.conveterEngToBng = function () {
            let retStr = this;
            for (let x in banglaNumbers) {
                retStr = retStr.replace(new RegExp(x, "g"), banglaNumbers[x]);
            }
            return retStr;
        };

        // bangla to englisg number converter end

        let abmCounter = document.querySelectorAll(".abmcounter");
        let abmArray = Array.from(abmCounter);

        window.onload = function () {
            abmArray.map((item) => {
                if (isInViewport(item)) {
                    if (item.dataset.view) {
                        let count = 0;

                        function banglaTypeJs() {
                            count++;
                            item.innerHTML = count.toString().conveterEngToBng();

                            if (count == item.dataset.count) {
                                clearInterval(stop);
                            }
                        }

                        let stop = setInterval(() => {
                            banglaTypeJs();
                        }, item.dataset.speed);
                        item.dataset.view = ""
                    }

                }

            });
           
        }
        window.onscroll = function () {
            abmArray.map((item) => {
                if (isInViewport(item)) {
                    if (item.dataset.view) {
                        let count = 0;

                        function banglaTypeJs() {
                            count++;
                            item.innerHTML = count.toString().conveterEngToBng();

                            if (count == item.dataset.count) {
                                clearInterval(stop);
                            }
                        }

                        let stop = setInterval(() => {
                            banglaTypeJs();
                        }, item.dataset.speed);
                        item.dataset.view = ""
                    }

                }

            });
           
        }