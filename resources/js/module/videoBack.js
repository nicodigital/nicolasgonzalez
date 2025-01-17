export function videoBeforeLeave(container = document) {

  const backgroundVideo = container.querySelector('.bg-video');
  if (backgroundVideo) {
    // Guardamos el tiempo actual y el estado de reproducción
    window.videoState = {
      currentTime: backgroundVideo.currentTime,
      isPlaying: !backgroundVideo.paused
    };
  }

}

export function videoAfterEnter(container = document) {

  const backgroundVideo = container.querySelector('.bg-video');
  if (backgroundVideo && window.videoState) {
    // Restauramos el tiempo de reproducción
    backgroundVideo.currentTime = window.videoState.currentTime;

    // Si el video estaba reproduciéndose, lo continuamos
    if (window.videoState.isPlaying) {
      const playPromise = backgroundVideo.play();

      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Video está reproduciéndose
        })
          .catch(error => {
            console.log("Error al reanudar el video:", error);
          });
      }

    }
  }

}
