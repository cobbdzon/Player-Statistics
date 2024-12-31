(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[972],{6490:()=>{},6699:(e,a,t)=>{"use strict";t.r(a),t.d(a,{getAllPlayers:()=>d,getHallOfFameData:()=>m,getPlayerDataByID:()=>p,getPlayerDataByUUID:()=>_,getServerData:()=>y,getServerStats:()=>E,getStatData:()=>f});var r=t(2426),n=t.n(r);let l=null,s=["broken","crafted","custom","dropped","killed","killed_by","mined","picked_up","used"];async function o(){return new Promise((e,a)=>{let t=indexedDB.open("PlayerStatisticsDB",1);t.onupgradeneeded=e=>{let a=e.target.result;a.objectStoreNames.contains("database")||(a.createObjectStore("database"),console.log("ObjectStore 'database' created successfully."))},t.onsuccess=a=>{e(a.target.result)},t.onerror=e=>{console.error("Error initializing IndexedDB:",e.target.error),a(e.target.error)}})}async function c(e){let a=await o();return new Promise((t,r)=>{let n=a.transaction("database","readwrite").objectStore("database"),l=Date.now(),s=n.put({db:e,timestamp:l},"cachedDatabase");s.onsuccess=()=>{console.log("Database and timestamp saved successfully."),t(!0)},s.onerror=e=>{console.error("Error saving database:",e.target.error),r(e.target.error)}})}async function i(){let e=await o();return new Promise((a,t)=>{let r=e.transaction("database","readonly").objectStore("database").get("cachedDatabase");r.onsuccess=e=>{let t=r.result;t?(console.log("Database and timestamp loaded successfully."),a(t)):(console.warn("No database found in IndexedDB."),a(null))},r.onerror=e=>{console.error("Error loading database:",e.target.error),t(e.target.error)}})}async function u(){let e=await n()({locateFile:()=>"/sql-wasm.wasm"}),a=await i();if(a){let{db:t,timestamp:r}=a,n=(Date.now()-r)/36e5;if(n<1)return console.log("Using cached database. Age: ".concat(n.toFixed(2)," hours.")),new e.Database(new Uint8Array(t));console.log("Cached database is too old (Age: ".concat(n.toFixed(2)," hours). Refreshing..."))}else console.log("No cached database found. Downloading new database...");let t=await fetch("/player-statistics.db");if(!t.ok)throw Error("Failed to fetch database from server.");let r=await t.arrayBuffer(),s=new e.Database(new Uint8Array(r));if(l){let e=s.export();await c(e)}return s}async function d(){try{var e;let a=await u();if(!a)return{success:!1,error:"Database not loaded",players:null};let t=a.exec("SELECT * FROM uuid_map"),r=null===(e=t[0])||void 0===e?void 0:e.values.map(e=>{let[a,t,r,n]=e;return{id:a,uuid:t,nick:r,last_online:new Date(Number(n))}});return{success:!0,players:r||[]}}catch(e){return console.error("Error loading players:",e),{success:!1,error:e.message}}}async function _(e){try{let a=await u();if(!a)return{success:!1,error:"Database not loaded",player:null};let t=a.prepare("\n      SELECT id AS player_id, player_uuid AS uuid, player_nick AS nick, player_last_online AS last_online\n      FROM uuid_map\n      WHERE player_uuid = ? LIMIT 1\n    ");t.bind([e]);let r=null;if(t.step()){let e=t.getAsObject();r={player_id:e.player_id,uuid:e.uuid,nick:e.nick,last_online:new Date(Number(e.last_online))}}if(t.free(),!r)return{success:!1,error:"Player not found",player:null};let n=a.prepare("\n      SELECT score\n      FROM hall_of_fame\n      WHERE player_id = ? LIMIT 1\n    ");n.bind([r.player_id]);let l=0;n.step()&&(l=n.getAsObject().score),n.free();let o={};for(let e of s){let t=a.prepare("\n        SELECT stat_name, amount AS value, position\n        FROM ".concat(e,"\n        WHERE player_id = ?\n        ORDER BY position ASC\n      "));t.bind([r.player_id]);let n=[];for(;t.step();){let e=t.getAsObject();n.push({name:e.stat_name,value:e.value,position:e.position})}t.free(),n.length>0&&(o[e]=n)}return{success:!0,error:null,player:{nick:r.nick,uuid:r.uuid,last_online:new Date(Number(r.last_online)),hof:l,stats:o}}}catch(e){return console.error("Error fetching player data:",e),{success:!1,error:e.message,player:null}}}async function p(e){try{let a=await u();if(!a)return{success:!1,error:"Database not loaded",player:null};let t=a.prepare("\n      SELECT id AS player_id, player_uuid AS uuid, player_nick AS nick, player_last_online AS last_online\n      FROM uuid_map\n      WHERE id = ? LIMIT 1\n    ");t.bind([e]);let r=null;if(t.step()){let e=t.getAsObject();r={player_id:e.player_id,uuid:e.uuid,nick:e.nick,last_online:new Date(Number(e.last_online))}}if(t.free(),!r)return{success:!1,error:"Player not found",player:null};let n=a.prepare("\n      SELECT score\n      FROM hall_of_fame\n      WHERE player_id = ? LIMIT 1\n    ");n.bind([r.player_id]);let l=0;n.step()&&(l=n.getAsObject().score),n.free();let o={};for(let e of s){let t=a.prepare("\n        SELECT stat_name, amount AS value, position\n        FROM ".concat(e,"\n        WHERE player_id = ?\n        ORDER BY position ASC\n      "));t.bind([r.player_id]);let n=[];for(;t.step();){let e=t.getAsObject();n.push({name:e.stat_name,value:e.value,position:e.position})}t.free(),n.length>0&&(o[e]=n)}return{success:!0,error:null,player:{nick:r.nick,uuid:r.uuid,last_online:new Date(Number(r.last_online)),hof:l,stats:o}}}catch(e){return console.error("Error fetching player data:",e),{success:!1,error:e.message,player:null}}}async function m(){try{let e=await u();if(!e)return{success:!1,error:"Database not loaded",data:null};let a=e.prepare("\n      SELECT \n        hof.player_id,\n        um.player_uuid AS uuid,\n        um.player_nick AS nick,\n        hof.score\n      FROM hall_of_fame hof\n      INNER JOIN uuid_map um ON hof.player_id = um.id\n      ORDER BY hof.score DESC\n      LIMIT 15\n    "),t=[];for(;a.step();){let e=a.getAsObject();t.push({id:e.player_id,uuid:e.uuid,nick:e.nick,score:e.score})}return a.free(),{success:!0,error:null,data:t}}catch(e){return console.error("ERROR (getHallOfFameData):",e),{success:!1,error:e.message,data:null}}}async function y(){try{let e=await u();if(!e)return{success:!1,error:"Database not loaded",data:null};let a=e.prepare("\n      SELECT\n        last_update,\n        server_desc,\n        server_url,\n        server_icon\n      FROM sync_metadata\n      LIMIT 1\n    "),t=null;if(a.step()){let e=a.getAsObject(),r=e.server_icon?"data:image/png;base64,".concat(btoa(String.fromCharCode(...new Uint8Array(e.server_icon)))):"/assets/server_missing_img.webp",n=e.server_desc?e.server_desc:"\xa7cPowered by\xa7r\n\xa7a\xa7lPlayer statistics \xa77\xa78(no motd found)",l=e.server_url?e.server_url:"https://modrinth.com/mod/player-statistics";t={last_update:new Date(e.last_update),desc:n,url:l,icon:r}}if(a.free(),!t)return{success:!1,error:"No server data found",data:null};return t.last_update>new Date("1970-01-01 00:00:00")&&(l=t.last_update),{success:!0,error:null,data:t}}catch(e){return console.error("ERROR (getServerData):",e),{success:!1,error:e.message,data:null}}}async function E(){try{let e=await u();if(!e)return{success:!1,error:"Database not loaded",data:null};let a=e.prepare("\n      SELECT \n        (SELECT server_name FROM sync_metadata LIMIT 1) AS server_name,\n        (SELECT server_url FROM sync_metadata LIMIT 1) AS server_url,\n        (SELECT COUNT(*) FROM uuid_map) AS player_count,\n        SUM(CASE WHEN stat_name = 'play_time' THEN amount ELSE 0 END) AS total_play_time,\n        SUM(CASE WHEN stat_name = 'damage_dealt' THEN amount ELSE 0 END) AS total_damage_dealt,\n        (SELECT SUM(amount) FROM custom \n          WHERE stat_name IN (\n            'climb_one_cm', \n            'crouch_one_cm', \n            'fall_one_cm', \n            'fly_one_cm', \n            'sprint_one_cm', \n            'swim_one_cm', \n            'walk_one_cm', \n            'walk_on_water_one_cm', \n            'walk_under_water_one_cm',\n            'boat_one_cm', \n            'aviate_one_cm', \n            'horse_one_cm', \n            'minecart_one_cm', \n            'pig_one_cm', \n            'strider_one_cm'\n          )\n        ) AS total_travelled_distance,\n        (SELECT SUM(amount) FROM broken) AS total_broken_tools,\n        (SELECT SUM(amount) FROM crafted) AS total_crafted_items,\n        (SELECT SUM(amount) FROM mined) AS total_mined_blocks,\n        (SELECT SUM(amount) FROM killed) AS total_killed_mobs,\n        (SELECT SUM(amount) FROM dropped) AS total_dropped_items,\n        (SELECT SUM(amount) FROM picked_up) AS total_pickedup_items\n      FROM custom;\n    "),t={};return a.step()&&(t=a.getAsObject()),a.free(),{success:!0,data:{server_name:t.server_name||"Unknown",server_url:t.server_url||"#",stats:{player_count:t.player_count||0,total_play_time:t.total_play_time||0,total_damage_dealt:t.total_damage_dealt||0,total_travelled_distance:t.total_travelled_distance||0,total_broken_tools:t.total_broken_tools||0,total_crafted_items:t.total_crafted_items||0,total_mined_blocks:t.total_mined_blocks||0,total_killed_mobs:t.total_killed_mobs||0,total_dropped_items:t.total_dropped_items||0,total_pickedup_items:t.total_pickedup_items||0}},error:null}}catch(e){return console.error("ERROR (getServerStats):",e),{success:!1,data:null,error:e.message}}}async function f(e,a){try{let t=await u();if(!t)return{success:!1,error:"Database not loaded",data:null};let r=t.prepare("\n     SELECT \n       c.position AS rank,\n       u.id AS Player_id,\n       u.player_uuid AS Player_uuid,\n       u.player_nick AS nick,\n       c.amount AS score\n     FROM ".concat(e," c\n     INNER JOIN uuid_map u ON c.player_id = u.id\n     WHERE c.stat_name = ?\n     ORDER BY Score DESC\n   "));r.bind([a]);let n=[];for(;r.step();){let e=r.getAsObject();n.push({rank:e.rank,player_id:e.Player_id,player_uuid:e.Player_uuid,player_nick:e.nick,score:e.score})}return r.free(),{success:!0,error:null,data:n}}catch(e){return console.error("ERROR (getStatData):",e),{success:!1,error:e.message,data:null}}}}}]);