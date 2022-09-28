<template>
  <div>
    <header class="holdHeader">
      <div class="holdLogo">
        <div class="semiCircle">
          <div class="circle"></div>
        </div>
        Adilo
      </div>
      <nav>
        <ul class="holdNav">
          <li>
            <router-link to="/projects" class="child">Projects</router-link>
          </li>
          <li class="child">
            Tools & App <i class="fas fa-angle-down"></i>
            <ul class="sublist">
              <li class="snap">
                <router-link to="/" class="anchor"
                  >Snapbyte Recorder</router-link
                >
              </li>
              <li class="snap">
                <router-link to="/" class="anchor">AudioBounce</router-link>
              </li>
              <li class="snap">
                <router-link to="/" class="anchor">Sugar Voice</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/channels" class="child">Channels</router-link>
          </li>
          <li>
            <router-link to="/contacts" class="child">Contacts</router-link>
          </li>
          <li>
            <router-link to="/analytics" class="child">Analytics</router-link>
          </li>
          <li>
            <router-link to="/settings" class="child">Settings</router-link>
          </li>
        </ul>
      </nav>
      <div class="holdProfile">
        <span class="help">Help</span>
        <div class="holdImage">
          <img src="./assets/lady2.png" alt="Profile" class="image" />
          <div>
            <p class="cody">Cody Fisher</p>
            <p class="codys">Cody Fisher@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  </div>
  <router-view />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  // components: {
  //   HelloWorld,
  // },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.holdHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid #e2e5ed;
}

.logo {
  height: 50px;
  margin-right: 20px;
}

.holdLogo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
}

.holdNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}

.child {
  padding: 15px 0;
  margin: 0 15px;
  font-size: 15px;
  font-weight: bold;
  color: #707070;
  cursor: pointer;
  font: normal normal medium 18px/27px Poppins;
  opacity: 1;
  text-decoration: none;
}

.child:hover {
  padding: 15px 0;
  margin: 0 15px;
  font-size: 15px;
  font-weight: bold;
  color: #21455e;
  cursor: pointer;
  font: normal normal medium 18px/27px Poppins;
  opacity: 1;
}

.semiCircle {
  width: 40px;
  height: 40px;
  background-color: #fbbd71;
  border-radius: 10px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  height: 20px;
  width: 20px;
  background-color: white;
  border-radius: 50%;
}

.holdProfile {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.help {
  text-align: left;
  letter-spacing: 0px;
  color: #21455e;
  opacity: 1;
  padding-right: 20px !important;
  padding-top: 10px;
  padding-bottom: 10px;
  border-right: 2px solid #e2e5ed;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
}

.holdImage {
  display: flex;
}

.image {
  height: 40px;
  width: 45px;
  border-radius: 10px;
  margin: 0 12px;
}

.cody {
  margin: 0;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
}

.codys {
  margin: 0;
  font-size: 15px;
  margin-bottom: 2px;
  color: #707070;
}

.sublist {
  padding: 0;
  list-style: none;
  list-style-type: none;
  position: absolute;
  background-color: white;
  border: 1px solid #e2e5ed;
  border-radius: 8px;
  margin-top: 10px;
  display: none;
}

.anchor {
  color: #707070;
  cursor: pointer;
  text-decoration: none;
}

.snap {
  padding: 15px;
  border-bottom: 1px solid #e2e5ed;
  padding: 15px !important;
  margin: 0 !important;
  font-size: 15px;
  font-weight: bold;
  color: #707070;
  cursor: pointer;
  font: normal normal medium 18px/27px Poppins;
  opacity: 1;
  text-decoration: none;
}

.anchor:hover {
  color: #0dabd8;
}

.child:hover .sublist {
  display: block;
}
</style>
