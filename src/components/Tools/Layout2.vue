<template>
  <div class="holdLoader">
    <div class="modal">
      <div class="holdHeader">
        <span class="New">New Recording</span>
        <span class="close"><i class="fa fa-close"></i></span>
      </div>
      <div class="modalContent">
        <div>
          <p class="save">Save the recording in</p>
          <select class="select">
            <option value="Select a project">Select a project</option>
            <option value="Local File">Local File</option>
            <option value="Google Drive">Google Drive</option>
          </select>
        </div>
        <div class="holdScreen">
          <div class="screen">
            <span class="toggle">Record screen</span>
            <label class="switch">
              <input type="checkbox" checked />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="screen">
            <span class="toggle">Record camera</span>
            <label class="switch">
              <input type="checkbox" checked />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="screen">
            <span class="toggle">Record mic</span>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round sliderme"></span>
            </label>
          </div>
        </div>
        <div class="holdButton">
          <button class="start notme">Start Recording</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "NewRecording",
};
</script>

<style scoped>
.holdLoader {
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #32313166;
  width: 100%;
  top: 0;
  left: 0;
}

.modal {
  width: 30%;
  height: auto;
  background-color: white;
  border-radius: 10px;
}

.holdHeader {
  padding: 20px 30px;
  border-bottom: 1px solid #e2e5ed;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.New {
  font-size: 23px;
  font-weight: bold;
}

.close {
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.modalContent {
  padding: 20px 30px;
}

.save {
  margin: 0;
  color: gray;
}

.select {
  padding: 13px 15px;
  width: 100%;
  background-color: #ededed;
  border: 1px solid #e2e5ed;
  margin-top: 10px;
  border-radius: 5px;
  outline: none;
}

.screen {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.toggle {
  font-size: 18px;
  font-weight: bold;
}

.holdScreen {
  margin-top: 18px;
}

.holdButton {
  padding: 15px;
  text-align: center;
}

.start {
  background-color: #0dabd8;
  border-radius: 28px;
  padding: 15px 30px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
  width: 90%;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "✓";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #0ad688;
}

.sliderme:before {
  content: "" !important;
}

input:checked + .slider {
  background-color: #0ad688;
}

input:focus + .slider {
  box-shadow: 0 0 1px none;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
