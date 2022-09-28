<template>
  <div :class="{ modalActives: modalDisplayMe == 'up' }">
    <div class="holdDash">
      <div style="text-align: center; width: 60%">
        <img src="../../assets/folder-image.png" alt="folder" class="folder" />
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-top: -50px;
          "
        >
          <h3>Say hello to the world!</h3>
          <p>
            Record your first video/audio and share it what your team, friends,
            followers and customers.
          </p>
          <div
            style="
              display: flex;
              justify-content: space-between;
              text-align: center;
              width: 70%;
            "
          >
            <router-link to="/livepreview" class="link">
              <button class="start holdREC">
                <span class="rec">REC</span> <span>Start Recording</span>
              </button>
            </router-link>
            <button class="new">
              <i class="fa fa-video-camera" style="margin-right: 10px"></i> New
              Requested
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout1",
  props: {
    modalDisplayMe: String,
  },
};
</script>

<style scoped>
.holdDash {
  width: 95%;
  height: 70vh;
  border: 2px dashed #a3bac6;
  margin-top: 30px;
  padding: 20px;
  border-radius: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.folder {
  width: 260px;
}

.new {
  background-color: #0dabd8;
  border-radius: 28px;
  padding: 10px;
  color: white;
  border: none;
  margin-right: 20px;
  cursor: pointer;
}

.start {
  background-color: #ef5350;
  border-radius: 28px;
  padding: 10px;
  color: white;
  border: none;
}

.holdREC {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.rec {
  font-size: 5px;
  background-color: white;
  color: black;
  border-radius: 100px;
  padding: 5px 3px;
  margin-right: 10px;
}

.link {
  text-decoration: none;
}

.modalActives {
  display: none;
}
</style>
