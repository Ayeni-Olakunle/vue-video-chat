<template>
  <div class="preview">
    <div class="preview2">
      <div class="holdLive">
        <div class="live2"><div class="live"></div></div>
        <span class="livetext">Live Preview</span>
      </div>
      <div class="video"></div>
      <div class="holdButton">
        <button class="new">Start Recording</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Preview",
};
</script>

<style scoped>
.preview {
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
}

.preview2 {
  width: 50%;
}

.video {
  width: 100%;
  height: 450px;
  background-color: #2c3e50;
  border-radius: 15px;
}

.new {
  background-color: #0dabd8;
  border-radius: 28px;
  padding: 15px 30px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
}

.holdButton {
  padding: 40px;
  text-align: center;
}

.live {
  height: 10px;
  width: 10px;
  background-color: #ef5350;
  border-radius: 50%;
}

.live2 {
  width: 10px;
  height: 10px;
  background-color: white;
  border: 1px solid #ef5350;
  border-radius: 50%;
  padding: 1px;
}

.holdLive {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  margin-top: 20px;
}

.livetext {
  color: rgb(169, 169, 169);
  margin-left: 10px;
}
</style>
