<template>
  <div class="holdTable">
    <table class="table">
      <thead class="thead">
        <tr>
          <th>Recordings</th>
          <th>Title</th>
          <th>Views</th>
          <th>Size</th>
          <th>Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <tr style="cursor: pointer">
          <td>
            <div style="margin-right: 20px">
              <div class="video">
                <img src="../../assets/movie.png" class="voimage" alt="video" />
                <span class="time">2:30</span>
              </div>
            </div>
          </td>
          <td style="width: 40%">
            <div style="width: 80%">
              <h4 style="margin-bottom: 0; color: #21455e; font-size: 15px">
                Getting it right the first time
              </h4>
              <p style="color: #a3bac6; font-size: 13px">
                The video description is shown here if the user has added it.
              </p>
            </div>
          </td>
          <td style="color: #21455e; font-size: 13px">324</td>
          <td style="color: #21455e; font-size: 13px">923 KB</td>
          <td style="color: #21455e; font-size: 13px">3 months ago</td>
          <td style="color: #21455e; font-size: 13px">
            <i
              class="fa fa-ellipsis-v"
              style="font-size: 20px; transform: rotate(90deg)"
            ></i>
          </td>
        </tr>
        <tr style="cursor: pointer">
          <td>
            <div style="margin-right: 20px">
              <div class="video">
                <img src="../../assets/movie.png" class="voimage" alt="video" />
                <span class="time">2:30</span>
              </div>
            </div>
          </td>
          <td style="width: 40%">
            <div style="width: 80%">
              <h4 style="margin-bottom: 0; color: #21455e; font-size: 15px">
                Getting it right the first time
              </h4>
              <p style="color: #a3bac6; font-size: 13px">
                The video description is shown here if the user has added it.
              </p>
            </div>
          </td>
          <td style="color: #21455e; font-size: 13px">324</td>
          <td style="color: #21455e; font-size: 13px">923 KB</td>
          <td style="color: #21455e; font-size: 13px">3 months ago</td>
          <td style="color: #21455e; font-size: 13px">
            <i
              class="fa fa-ellipsis-v"
              style="font-size: 20px; transform: rotate(90deg)"
            ></i>
          </td>
        </tr>
        <tr style="cursor: pointer">
          <td>
            <div style="margin-right: 20px">
              <div class="video">
                <img src="../../assets/movie.png" class="voimage" alt="video" />
                <span class="time">2:30</span>
              </div>
            </div>
          </td>
          <td style="width: 40%">
            <div style="width: 80%">
              <h4 style="margin-bottom: 0; color: #21455e; font-size: 15px">
                Getting it right the first time
              </h4>
              <p style="color: #a3bac6; font-size: 13px">
                The video description is shown here if the user has added it.
              </p>
            </div>
          </td>
          <td style="color: #21455e; font-size: 13px">324</td>
          <td style="color: #21455e; font-size: 13px">923 KB</td>
          <td style="color: #21455e; font-size: 13px">3 months ago</td>
          <td style="color: #21455e; font-size: 13px">
            <i
              class="fa fa-ellipsis-v"
              style="font-size: 20px; transform: rotate(90deg)"
            ></i>
          </td>
        </tr>
        <tr style="cursor: pointer">
          <td>
            <div style="margin-right: 20px">
              <div class="video">
                <img src="../../assets/movie.png" class="voimage" alt="video" />
                <span class="time">2:30</span>
              </div>
            </div>
          </td>
          <td style="width: 40%">
            <div style="width: 80%">
              <h4 style="margin-bottom: 0; color: #21455e; font-size: 15px">
                Getting it right the first time
              </h4>
              <p style="color: #a3bac6; font-size: 13px">
                The video description is shown here if the user has added it.
              </p>
            </div>
          </td>
          <td style="color: #21455e; font-size: 13px">324</td>
          <td style="color: #21455e; font-size: 13px">923 KB</td>
          <td style="color: #21455e; font-size: 13px">3 months ago</td>
          <td style="color: #21455e; font-size: 13px">
            <i
              class="fa fa-ellipsis-v"
              style="font-size: 20px; transform: rotate(90deg)"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout3",
};
</script>

<style scoped>
.holdTable {
  width: 100%;
}
.table {
  width: 100%;
  text-align: left;
  margin-top: 30px;
}

.thead {
  color: #21455e;
}

.video {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  border-radius: 8px;
  position: relative;
}

.time {
  text-align: center;
  letter-spacing: 0px;
  color: #ffffff;
  background-color: black;
  margin: 7px;
  font-size: 12px;
  padding: 1px 5px;
  border-radius: 2px;
}

table tr td {
  padding-top: 20px;
}

.voimage {
  height: 100px;
  position: absolute;
  z-index: -1;
  border-radius: 8px;
}
</style>
