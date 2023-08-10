import { c as create_ssr_component } from "../../chunks/ssr.js";
const EndScreen_svelte_svelte_type_style_lang = "";
const Math_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#startScreen.svelte-1l54m2w{background-color:antiquewhite;width:100%;height:100vh;text-align:center;font-family:arial,sans-serif;font-size:30px}.btn.svelte-1l54m2w{margin:10px;height:50px;width:75%;font-size:20px;background-color:white;color:black;border:2px solid #555555}.btn.svelte-1l54m2w:hover{background-color:#555555;color:white}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${`<div id="startScreen" class="svelte-1l54m2w"><br> <h2 data-svelte-h="svelte-za3817">Mental Arithmetic</h2> <p data-svelte-h="svelte-1vo6yx5">How well do you fare in mental math?</p> <button class="btn svelte-1l54m2w" data-svelte-h="svelte-msmcpz">Beginner (Student)</button> <button class="btn svelte-1l54m2w" data-svelte-h="svelte-1kqroto">Intermediate (Accountant)</button> <button class="btn svelte-1l54m2w" data-svelte-h="svelte-1tw39ez">Expert (Asian)</button> <br> <br> <a href="https://github.com/a1phanaught/math-game-svelte" data-svelte-h="svelte-1uwjt2y"><img src="img/github.png" alt="github.com/a1phanaught" style="width: 30px !important; height: 30px !important; margin: 5px;"></a> <a href="https://svelte.dev" data-svelte-h="svelte-1mc9kba"><img src="img/svelte.png" alt="Powered by Svelte" style="width: 25px !important; height: 30px !important; margin: 5px;"></a></div>`}`;
});
export {
  Page as default
};
