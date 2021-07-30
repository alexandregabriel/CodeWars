function longest(s1, s2) {
    //const final = 
    return Array.from(new Set(s1.concat(s2))).sort().join('');
  }

  console.log(longest("aretheyhere", "yestheyarehere"));