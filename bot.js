﻿const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();

console.log("Scrpit By Dream");

client.on('ready', () => {
  console.log(`----------------`);
  console.log(`Credit Farmm - Script By : Vechx `);
  console.log(`----------------`);
  console.log(`Loadinng`);
  console.log(`Loadinng.`);
  console.log(`Loadinng..`);
  console.log(`Loadinng...`);
  console.log(`This Bots Online ' `);
 console.log(`----------------`);


});


client.on('message', message => {
  if(message.author.id !== "375385812860403724" )return;
  if(message.content === 'Collect Dailies'){
      message.channel.send('#daily')
  }
});

client.on('message', message => {
  if(message.author.id !== "375385812860403724" )return;
  if(message.content === 'Check Credits'){
      message.channel.send('#credits')
  }
});

client.on('message', message => {
  if(message.author.id !== "375385812860403724" )return;
  if(message.content === 'Rep Me'){
      message.channel.send('#rep <@375385812860403724>')
  }
});

client.on('message', message => {
  if(message.author.id !== "375385812860403724" )return;
const args = message.content.trim().split(/ +/g);
const command = args.shift().toLowerCase();
  if ( command === "gc") {
  let credits = args[0]; 
  message.channel.send(`#credits  <@375385812860403724> ${credits}`);
  }

  if (command === "say") {
    let thingie = args[0]; 
    message.channel.send(`${thingie}`);
    }
  });
  
//Bot 2//
client2.on('message', message => {
  if(message.author.id !== "375385812860403724" )return;
  if(message.content === 'Collect Dailies'){
      message.channel.send('#daily')
  }
});

client2.on('message', message => {
  if(message.author.id !== "375385812860403724" )return;
  if(message.content === 'Check Credits'){
      message.channel.send('#credits')
  }
});

client2.on('message', message => {
  if(message.author.id !== "375385812860403724" )return;
  if(message.content === 'Rep Me'){
      message.channel.send('#rep <@375385812860403724>')
  }
});
client2.on('message', message => {
  if(message.author.id !== "375385812860403724" )return;
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === "gc2") {
  let credits = args[0]; 
  message.channel.send(`#credits  <@375385812860403724> ${credits}`);
  }
  if (command === "say") {
    let thingie = args[0]; 
    message.channel.send(`${thingie}`);
    }
  });
 //bot 3//
 client3.on('message', message => {
  if(message.author.id !== "375385812860403724" )return;
  if(message.content === 'Collect Dailies'){
      message.channel.send('#daily')
  }
});

client3.on('message', message => {
  if(message.author.id !== "375385812860403724" )return;
  if(message.content === 'Check Credits'){
      message.channel.send('#credits')
  }
});

client3.on('message', message => {
  if(message.author.id !== "375385812860403724" )return;
  if(message.content === 'Rep Me'){
      message.channel.send('#rep <@375385812860403724>')
  }
});
client3.on('message', message => {
  if(message.author.id !== "375385812860403724" )return;
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === "gc3") {
  let credits = args[0]; 
  message.channel.send(`#credits  <@375385812860403724> ${credits}`);
  }
  if (command === "say") {
    let thingie = args[0]; 
    message.channel.send(`${thingie}`);
    }
  });
//bot 4//

client4.on('message', message => {
  if(message.author.id !== "375385812860403724" )return;
  if(message.content === 'Collect Dailies'){
      message.channel.send('#daily')
  }
});

client4.on('message', message => {
  if(message.author.id !== "375385812860403724" )return;
  if(message.content === 'Check Credits'){
      message.channel.send('#credits')
  }
});

client4.on('message', message => {
  if(message.author.id !== "375385812860403724" )return;
  if(message.content === 'Rep Me'){
      message.channel.send('#rep <@375385812860403724>')
  }
});
client4.on('message', message => {
  if(message.author.id !== "375385812860403724" )return;
  const args = message.content.trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === "gc4") {
  let credits = args[0]; 
  message.channel.send(`#credits  <@375385812860403724> ${credits}`);
  }
  if (command === "say") {
    let thingie = args[0]; 
    message.channel.send(`${thingie}`);
    }
  });


client.on('message', message => {
  if(message.author.id !== "375385812860403724" )return; // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam2') {
    let count = 0;
    let ecount = 0;
    for(let x = 0; x < 90000; x++) {
      message.channel.send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
        .then(m => {
          count++;
        })
      
        
      }
    }
    if(message.author.id !== "375385812860403724" )return; 
    if (message.content === '!stop') {
    let x = 90000
    }
});

client2.on('message', message => {
  if(message.author.id !== "375385812860403724" )return; // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam2') {
    let count = 0;
    let ecount = 0;
    for(let x = 0; x < 90000; x++) {
      message.channel.send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
        .then(m => {
          count++;
        })
        
      }
    }
    if(message.author.id !== "375385812860403724" )return; 
    if (message.content === '!stop') {
    let x = 90000
    }
});

client3.on('message', message => {
  if(message.author.id !== "375385812860403724" )return; // لا تغير شئ عشان ما تخرب الدنيا
  if (message.content === '!spam2') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
      if(message.author.id !== "375385812860403724" )return; 
    if (message.content === '!stop') {
    let x = 90000
    }
  });
  client4.on('message', message => {
    if(message.author.id !== "375385812860403724" )return; // لا تغير شئ عشان ما تخرب الدنيا
    if (message.content === '!spam2') {
        let count = 0;
        let ecount = 0;
        for(let x = 0; x < 90000; x++) {
          message.channel.send(`**Credit Spam , Frame , Credit By Vechx , Farm Credit By Vechx, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
            .then(m => {
              count++;
            })
            
          }
        }
        
    });
client5.on('message', message => { 
  let channel = message.channel;
  let roles = message.guild.roles;
  let testRole = roles.find('name', 'Your bots role');
  if(message.author.id !== "375385812860403724" )return;
    if (message.content === '!stop') {
      
      channel.overwritePermissions(
      testRole,
         { 'SEND_MESSAGES': false },
                
                
      )
     }
  });
client5.on('message', message => { 
  let channel = message.channel;
  let roles = message.guild.roles;
  let testRole = roles.find('name', 'Your bots role');
  if(message.author.id !== "375385812860403724" )return;
    if (message.content === '!start') {
      
      channel.overwritePermissions(
      testRole,
         { 'SEND_MESSAGES': true },
                
                
      )
     }
  });


client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);