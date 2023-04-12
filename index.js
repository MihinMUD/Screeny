alert("Scroll down to start recording!")

const recordBtn = document.querySelector(".record");
const stopBtn = document.querySelector(".stop")
const video = document.querySelector("video");

const mediaOptions = {
    video: {
        displaySurface: "window",
    },
    audio: true,
};
recordBtn.addEventListener("click", async () => {
    video.srcObject = await navigator.mediaDevices.getDisplayMedia(mediaOptions);
    document.querySelector("p").remove();
});


stopBtn.addEventListener("click", ()=> {
    video.srcObject.getTracks().forEach(track => track.stop())
    video.srcObject = null
})