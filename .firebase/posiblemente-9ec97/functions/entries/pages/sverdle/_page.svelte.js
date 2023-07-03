import { c as create_ssr_component, a as validate_store, b as subscribe, f as each, e as escape, d as add_attribute, h as null_to_empty } from "../../../chunks/ssr.js";
import "devalue";
import { r as readable } from "../../../chunks/index2.js";
const get_initial_motion_preference = () => {
  return false;
};
const reduced_motion = readable(get_initial_motion_preference(), (set) => {
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.s-QKuN4MdM35ff.s-QKuN4MdM35ff{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;flex:1}.how-to-play.s-QKuN4MdM35ff.s-QKuN4MdM35ff{color:var(--color-text)}.how-to-play.s-QKuN4MdM35ff.s-QKuN4MdM35ff::before{content:'i';display:inline-block;font-size:0.8em;font-weight:900;width:1em;height:1em;padding:0.2em;line-height:1;border:1.5px solid var(--color-text);border-radius:50%;text-align:center;margin:0 0.5em 0 0;position:relative;top:-0.05em}.grid.s-QKuN4MdM35ff.s-QKuN4MdM35ff{--width:min(100vw, 40vh, 380px);max-width:var(--width);align-self:center;justify-self:center;width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start}.grid.s-QKuN4MdM35ff .row.s-QKuN4MdM35ff{display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:0.2rem;margin:0 0 0.2rem 0}@media(prefers-reduced-motion: no-preference){.grid.bad-guess.s-QKuN4MdM35ff .row.current.s-QKuN4MdM35ff{animation:s-QKuN4MdM35ff-wiggle 0.5s}}.grid.playing.s-QKuN4MdM35ff .row.current.s-QKuN4MdM35ff{filter:drop-shadow(3px 3px 10px var(--color-bg-0))}.letter.s-QKuN4MdM35ff.s-QKuN4MdM35ff{aspect-ratio:1;width:100%;display:flex;align-items:center;justify-content:center;text-align:center;box-sizing:border-box;text-transform:lowercase;border:none;font-size:calc(0.08 * var(--width));border-radius:2px;background:white;margin:0;color:rgba(0, 0, 0, 0.7)}.letter.missing.s-QKuN4MdM35ff.s-QKuN4MdM35ff{background:rgba(255, 255, 255, 0.5);color:rgba(0, 0, 0, 0.5)}.letter.exact.s-QKuN4MdM35ff.s-QKuN4MdM35ff{background:var(--color-theme-2);color:white}.letter.close.s-QKuN4MdM35ff.s-QKuN4MdM35ff{border:2px solid var(--color-theme-2)}.selected.s-QKuN4MdM35ff.s-QKuN4MdM35ff{outline:2px solid var(--color-theme-1)}.controls.s-QKuN4MdM35ff.s-QKuN4MdM35ff{text-align:center;justify-content:center;height:min(18vh, 10rem)}.keyboard.s-QKuN4MdM35ff.s-QKuN4MdM35ff{--gap:0.2rem;position:relative;display:flex;flex-direction:column;gap:var(--gap);height:100%}.keyboard.s-QKuN4MdM35ff .row.s-QKuN4MdM35ff{display:flex;justify-content:center;gap:0.2rem;flex:1}.keyboard.s-QKuN4MdM35ff button.s-QKuN4MdM35ff,.keyboard.s-QKuN4MdM35ff button.s-QKuN4MdM35ff:disabled{--size:min(8vw, 4vh, 40px);background-color:white;color:black;width:var(--size);border:none;border-radius:2px;font-size:calc(var(--size) * 0.5);margin:0}.keyboard.s-QKuN4MdM35ff button.exact.s-QKuN4MdM35ff{background:var(--color-theme-2);color:white}.keyboard.s-QKuN4MdM35ff button.missing.s-QKuN4MdM35ff{opacity:0.5}.keyboard.s-QKuN4MdM35ff button.close.s-QKuN4MdM35ff{border:2px solid var(--color-theme-2)}.keyboard.s-QKuN4MdM35ff button.s-QKuN4MdM35ff:focus{background:var(--color-theme-1);color:white;outline:none}.keyboard.s-QKuN4MdM35ff button[data-key='enter'].s-QKuN4MdM35ff,.keyboard.s-QKuN4MdM35ff button[data-key='backspace'].s-QKuN4MdM35ff{position:absolute;bottom:0;width:calc(1.5 * var(--size));height:calc(1 / 3 * (100% - 2 * var(--gap)));text-transform:uppercase;font-size:calc(0.3 * var(--size));padding-top:calc(0.15 * var(--size))}.keyboard.s-QKuN4MdM35ff button[data-key='enter'].s-QKuN4MdM35ff{right:calc(50% + 3.5 * var(--size) + 0.8rem)}.keyboard.s-QKuN4MdM35ff button[data-key='backspace'].s-QKuN4MdM35ff{left:calc(50% + 3.5 * var(--size) + 0.8rem)}.keyboard.s-QKuN4MdM35ff button[data-key='enter'].s-QKuN4MdM35ff:disabled{opacity:0.5}.restart.s-QKuN4MdM35ff.s-QKuN4MdM35ff{width:100%;padding:1rem;background:rgba(255, 255, 255, 0.5);border-radius:2px;border:none}.restart.s-QKuN4MdM35ff.s-QKuN4MdM35ff:focus,.restart.s-QKuN4MdM35ff.s-QKuN4MdM35ff:hover{background:var(--color-theme-1);color:white;outline:none}@keyframes s-QKuN4MdM35ff-wiggle{0%{transform:translateX(0)}10%{transform:translateX(-2px)}30%{transform:translateX(4px)}50%{transform:translateX(-6px)}70%{transform:translateX(+4px)}90%{transform:translateX(-2px)}100%{transform:translateX(0)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let won;
  let i;
  let submittable;
  let $$unsubscribe_reduced_motion;
  validate_store(reduced_motion, "reduced_motion");
  $$unsubscribe_reduced_motion = subscribe(reduced_motion, (value) => value);
  let { data } = $$props;
  let { form } = $$props;
  let classnames;
  let description;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  won = data.answers.at(-1) === "xxxxx";
  i = won ? -1 : data.answers.length;
  submittable = data.guesses[i]?.length === 5;
  {
    {
      classnames = {};
      description = {};
      data.answers.forEach((answer, i2) => {
        const guess = data.guesses[i2];
        for (let i3 = 0; i3 < 5; i3 += 1) {
          const letter = guess[i3];
          if (answer[i3] === "x") {
            classnames[letter] = "exact";
            description[letter] = "correct";
          } else if (!classnames[letter]) {
            classnames[letter] = answer[i3] === "c" ? "close" : "missing";
            description[letter] = answer[i3] === "c" ? "present" : "absent";
          }
        }
      });
    }
  }
  $$unsubscribe_reduced_motion();
  return ` ${$$result.head += `<!-- HEAD_svelte-18lvto8_START -->${$$result.title = `<title>Sverdle</title>`, ""}<meta name="description" content="A Wordle clone written in SvelteKit"><!-- HEAD_svelte-18lvto8_END -->`, ""} <h1 class="visually-hidden" data-svelte-h="svelte-16hvqlg">Sverdle</h1> <form method="POST" action="?/enter" class="s-QKuN4MdM35ff"><a class="how-to-play s-QKuN4MdM35ff" href="/sverdle/how-to-play" data-svelte-h="svelte-1w3fhu3">How to play</a> <div class="${[
    "grid s-QKuN4MdM35ff",
    (!won ? "playing" : "") + " " + (form?.badGuess ? "bad-guess" : "")
  ].join(" ").trim()}">${each(Array.from(Array(6).keys()), (row) => {
    let current = row === i;
    return ` <h2 class="visually-hidden">Row ${escape(row + 1)}</h2> <div class="${["row s-QKuN4MdM35ff", current ? "current" : ""].join(" ").trim()}">${each(Array.from(Array(5).keys()), (column) => {
      let answer = data.answers[row]?.[column], value = data.guesses[row]?.[column] ?? "", selected = current && column === data.guesses[row].length, exact = answer === "x", close = answer === "c", missing = answer === "_";
      return `      <div class="${[
        "letter s-QKuN4MdM35ff",
        (exact ? "exact" : "") + " " + (close ? "close" : "") + " " + (missing ? "missing" : "") + " " + (selected ? "selected" : "")
      ].join(" ").trim()}">${escape(value)} <span class="visually-hidden">${exact ? `(correct)` : `${close ? `(present)` : `${missing ? `(absent)` : `empty`}`}`}</span> <input name="guess" ${!current ? "disabled" : ""} type="hidden"${add_attribute("value", value, 0)}> </div>`;
    })} </div>`;
  })}</div> <div class="controls s-QKuN4MdM35ff">${won || data.answers.length >= 6 ? `${!won && data.answer ? `<p>the answer was &quot;${escape(data.answer)}&quot;</p>` : ``} <button data-key="enter" class="restart selected s-QKuN4MdM35ff" formaction="?/restart">${escape(won ? "you won :)" : `game over :(`)} play again?</button>` : `<div class="keyboard s-QKuN4MdM35ff"><button data-key="enter" ${!submittable ? "disabled" : ""} class="${["s-QKuN4MdM35ff", submittable ? "selected" : ""].join(" ").trim()}">enter</button> <button data-key="backspace" formaction="?/update" name="key" value="backspace" class="s-QKuN4MdM35ff" data-svelte-h="svelte-1ptb1bp">back</button> ${each(["qwertyuiop", "asdfghjkl", "zxcvbnm"], (row) => {
    return `<div class="row s-QKuN4MdM35ff">${each(row, (letter) => {
      return `<button${add_attribute("data-key", letter, 0)} class="${escape(null_to_empty(classnames[letter]), true) + " s-QKuN4MdM35ff"}" ${data.guesses[i].length === 5 ? "disabled" : ""} formaction="?/update" name="key"${add_attribute("value", letter, 0)} aria-label="${escape(letter, true) + " " + escape(description[letter] || "", true)}">${escape(letter)} </button>`;
    })} </div>`;
  })}</div>`}</div></form> ${won ? `<div style="position: absolute; left: 50%; top: 30%"></div>` : ``}`;
});
export {
  Page as default
};
