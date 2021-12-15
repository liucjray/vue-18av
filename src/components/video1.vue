<template>
<table>
  <thead>
    <th>
      <td>title</td>
      <td>keyword</td>
      <td>channel</td>
      <td>duration</td>
      <td>framerate</td>
      <td>hd</td>
      <td>addtime</td>
      <td>viewnumber</td>
      <td>likes</td>
      <td>dislikes</td>
      <td>video_url</td>
      <td>embedded_url</td>
      <td>preview_url</td>
      <td>preview_video_url</td>
      <td>private</td>
      <td>vid</td>
      <td>uid</td>
    </th>
  </thead>
  <tbody>
    <tr>
      <td>{{video1.title}}</td>
      <td>{{video1.keyword}}</td>
      <td>{{video1.channel}}</td>
      <td>{{video1.duration}}</td>
      <td>{{video1.framerate}}</td>
      <td>{{video1.hd}}</td>
      <td>{{video1.addtime}}</td>
      <td>{{video1.viewnumber}}</td>
      <td>{{video1.likes}}</td>
      <td>{{video1.dislikes}}</td>
      <td>{{video1.video_url}}</td>
      <td>{{video1.embedded_url}}</td>
      <td>{{video1.preview_url}}</td>
      <td>{{video1.preview_video_url}}</td>
      <td>{{video1.private}}</td>
      <td>{{video1.vid}}</td>
      <td>{{video1.uid}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
import axios from "axios";
export default {
  name: "video",
  data() {
    return {
      video1: [],
    };
  },
  beforeMount() {
    this.get_list();
  },
  methods: {
    get_list() {
      axios
        .get("https://api.avgle.com/v1/video/608340")
        .then(({ data }) => {
          this.video1 = data.response.video;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>