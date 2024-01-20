function getEOL(text) {
  let eol = '\r\n';
  if(text.indexOf(eol) == -1) eol = '\r';
  if(text.indexOf(eol) == -1) eol = '\n';
  return eol
}

function block2lists(b, eol) {
  let x = [];
  let y = [];
  
  let lines = b.split(eol);
  for(let row of lines) {
    let col = row.split(',');
    x.push(col[0]);
    y.push(col[1]);
  }
  return [x, y];
}

function block2data(b, eol) {
  let d = [];
  
  let lines = b.split(eol);
  for(let row of lines) {
    let col = row.split(',');
    let obj = {
      x: col[0],
      y: col[1]
    };
    d.push(obj);
  }
  return d;
}

function getBlocks(text, eol) { 
  let lines = text.split(eol);
  lines.shift();
  lines = lines.join(eol);
  blocks = lines.split(eol + eol);
  return blocks;
}

function cleanPrePostBlankLines(text) {
  let inner = text;
  let eol = getEOL(inner);
  let lines = inner.split(eol);
  
  if(lines[0].length == 0) lines.shift();
  let N = lines.length;
  if(lines[N-1].length == 0) lines.pop();
  
  return lines;
}

function getParams(t) {
  let eol = getEOL(t);
  let lines = t.split(eol);
  
  for(let l of lines) {
    let cols = l.split(' ');
    if(cols[0] == 'B_LVISIB') {
      let temp1 = cols[1].split(',');
      let temp2 = []
      for(let i = 0; i < temp1.length; i++) {
        if(temp1[i] == 'true') {
          temp2.push(true);
        } else {
          temp2.push(false);
        }
        temp2.push(Boolean(temp1[i]));
      }
      window[cols[0]] = temp2;
    } else {
      window[cols[0]] = cols[1].split(',');
    }
  }
}
