function logSomething() {
  const random = Math.random();
  console.log(random);
  console.log("Hello", "Console");
  console.warn("123 warning");
  const label = "list of People";
  console.group(label);
  console.info("leo");
  console.info("charly");
  console.groupEnd(label);
  console.log("%cHello", "color:red");
}

function startLog() {
  const a = 100;
  b();
}

function b() {
  const c = 200;
  d();
}

function d() {
  const e = 300;
  f();
}
function f() {
  console.log("Done!!!!");
  if (Math.random() > 0.5) {
    try {
      throw new Error("Better luck next time.");
    } catch (error) {
      console.log("prevented oopsee...");
    }
  }
}
