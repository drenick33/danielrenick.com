const ParsePost = (post: string) => {
  console.log(post);
  let startRegex = /<CODE>/g, //REG Expression to search for start of CODE Tag
    startResult,
    startIndices = []; //WHERE the Code Tag starts
  while ((startResult = startRegex.exec(post))) {
    startIndices.push(startResult.index); //Creates array of where <CODE> tags start
  }
  console.log(startIndices);

  let endRegex = /<\/CODE>/g, //REG Expression to search for end of CODE Tag
    endResult,
    endIndices = []; //WHERE the Code Tag starts
  while ((endResult = endRegex.exec(post))) {
    endIndices.push(endResult.index); //Creates array of where <CODE> tags end
  }
  console.log(endIndices);

  let codeBlocks = [];
  for (let i = 0; i < endIndices.length; i++) {
    codeBlocks.push(startIndices[i], endIndices[i]);
  }
  console.log(codeBlocks);

  let results = [];

  let isCode = false; //alternate between code and text, always start with text

  if (codeBlocks.length > 1) {
    //If there's code in the post

    results.push({ string: post.slice(0, startIndices[0]), isCode }); // Always get first section
    isCode = !isCode; //Next part will be code

    for (let i = 0; i < endIndices.length; i++) {
      results.push({
        string: post.slice(startIndices[i] + 6, endIndices[i]),
        isCode,
      }); //Return code section

      isCode = !isCode; //Next is section between code blocks
      if (i === endIndices.length) {
        //No more code blocks after
        results.push({
          string: post.slice(endIndices[i] + 7), //@TODO check if undefined is the same as null
          isCode,
        });
      } //Last section block
      else {
        //If there's another block after
        results.push({
          string: post.slice(endIndices[i] + 7, startIndices[i + 1]), //Block </CODE> to the next <CODE>
          isCode,
        });
        isCode = !isCode;
      }
    }

    //   for (let i = 0; i <= codeBlocks.length; i = i + 3) {
    //     //0 + 3n is text; 1 + 3n is code start; 2 + 3n is code end
    //     //3 string segs are needed
    //     //#1 [text, start] - !isCode  [initial text]
    //     //#2 [start, end] - isCode    [code block]
    //     //#3 [end, start] - !isCode   [text between code blocks]
    //     //#4 [start, end] - isCode [code block 2]
    //     //#5 [end, start] - !isCode [text between code blocks #2]
    //   }
    // }

    // if (codeBlocks.length > 1) {
    //   //@TODO: Fix the logic
    //   //If there is code in the post
    //   for (let i = 0; i <= codeBlocks.length + 200; i = i + 3) {
    //     console.log('i is: ' + i);
    //     //Increment to the next pair every loop
    //     if (i === -1) {
    //       //First run
    //       results.push({ string: post.slice(0, codeBlocks[0]), isCode }); //Get first text
    //       isCode = !isCode; //Alternate between code and text
    //     } else {
    //       //Not the first run
    //       if (i >= codeBlocks.length) {
    //         //Get final text
    //         console.log('getting final text');
    //         console.log(codeBlocks[i - 1]);
    //         results.push({
    //           string: post.slice(codeBlocks[i]),
    //           isCode,
    //         });
    //         isCode = !isCode;
    //         break;
    //       } //IF finished
    //       else {
    //         //Splice string
    //         if (isCode) {
    //           //Code block | Determined by
    //           results.push({
    //             string: post.slice(codeBlocks[i] + 6, codeBlocks[i + 1]), //Get start of block from after <CODE>, end before </CODE>
    //             isCode: isCode,
    //           });
    //           isCode = !isCode; //Next block won't be code
    //         } else {
    //           //Not CODE
    //           if (i + 2 > codeBlocks.length) {
    //             //If there are no more code blocks after
    //             console.log('IN this BLOCK');
    //             results.push({
    //               string: post.slice(codeBlocks[i - 1] + 7),
    //               isCode: false,
    //             });
    //             isCode = !isCode; //Next block will be CODE
    //           } else {
    //             //If there's another block of CODE after
    //             results.push({
    //               string: post.slice(codeBlocks[i + 1] + 7, codeBlocks[i + 2]), //Slice from end of </CODE> to the next <CODE>
    //               isCode: false,
    //             });
    //             isCode = !isCode; //Next block will be CODE
    //           }
    //         }
    //       }
    //     }
    //   } //For statement
  } //Runs if there's code
  else {
    results.push({ string: post, isCode: false }); //Return the entire post if there are no code snippets
  }

  // if (codeBlocks.length > 1) {
  //   //@TODO: Fix the logic
  //   //If there is code in the post
  //   for (let i = -1; i <= codeBlocks.length + 200; i = i + 2) {
  //     console.log('i is: ' + i);
  //     //Increment to the next pair every loop
  //     if (i === -1) {
  //       //First run
  //       results.push({ string: post.slice(0, codeBlocks[0]), isCode }); //Get first text
  //       isCode = !isCode; //Alternate between code and text
  //     } else {
  //       //Not the first run
  //       if (i >= codeBlocks.length) {
  //         //Get final text
  //         console.log('getting final text');
  //         console.log(codeBlocks[i - 1]);
  //         results.push({
  //           string: post.slice(codeBlocks[i]),
  //           isCode,
  //         });
  //         isCode = !isCode;
  //         break;
  //       } //IF finished
  //       else {
  //         //Splice string
  //         if (isCode) {
  //           //Code block | Determined by
  //           results.push({
  //             string: post.slice(codeBlocks[i] + 6, codeBlocks[i + 1]), //Get start of block from after <CODE>, end before </CODE>
  //             isCode: isCode,
  //           });
  //           isCode = !isCode; //Next block won't be code
  //         } else {
  //           //Not CODE
  //           if (i + 2 > codeBlocks.length) {
  //             //If there are no more code blocks after
  //             console.log('IN this BLOCK');
  //             results.push({
  //               string: post.slice(codeBlocks[i - 1] + 7),
  //               isCode: false,
  //             });
  //             isCode = !isCode; //Next block will be CODE
  //           } else {
  //             //If there's another block of CODE after
  //             results.push({
  //               string: post.slice(codeBlocks[i + 1] + 7, codeBlocks[i + 2]), //Slice from end of </CODE> to the next <CODE>
  //               isCode: false,
  //             });
  //             isCode = !isCode; //Next block will be CODE
  //           }
  //         }
  //       }
  //     }
  //   } //For statement
  // } //Runs if there's code
  // else {
  //   results.push({ string: post, isCode: false }); //Return the entire post if there are no code snippets
  // }

  // results.push({ string: post.slice(0, codeBlocks[0]), isCode: false });
  // results.push({
  //   string: post.slice(codeBlocks[0] + 6, codeBlocks[1]),
  //   isCode: true,
  // });
  // results.push({ string: post.slice(codeBlocks[1] + 7), isCode: false });
  console.log(results);
  return results;
};

export default ParsePost;

//   console.log(post.split('<CODE>').length);
//   console.log((post.match(/CODE/g) || []).length);
