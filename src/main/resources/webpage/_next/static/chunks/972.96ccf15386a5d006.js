(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[972],{6490:()=>{},6699:(e,t,a)=>{"use strict";a.r(t),a.d(t,{getAllPlayers:()=>o,getHallOfFameData:()=>_,getPlayerDataByID:()=>u,getPlayerDataByUUID:()=>i,getServerData:()=>c,getServerStats:()=>d});var r=a(2426),n=a.n(r);let l=["broken","crafted","custom","dropped","killed","killed_by","mined","picked_up","used"];async function s(){let e=async()=>{let e=await fetch("/player-statistics.db");return e.ok?await e.arrayBuffer():null},t=await n()({locateFile:()=>"/sql-wasm.wasm"}),a=await e();if(!a)return null;let[r,l]=await Promise.all([t,a]);return new r.Database(new Uint8Array(l))}async function o(){try{var e;let t=await s();if(!t)return{success:!1,error:"Database not loaded",players:null};let a=t.exec("SELECT * FROM uuid_map"),r=null===(e=a[0])||void 0===e?void 0:e.values.map(e=>{let[t,a,r,n]=e;return{id:t,uuid:a,nick:r,last_online:new Date(Number(n))}});return{success:!0,players:r||[]}}catch(e){return console.error("Error loading players:",e),{success:!1,error:e.message}}}async function i(e){try{let t=await s();if(!t)return{success:!1,error:"Database not loaded",player:null};let a=t.prepare("\n      SELECT id AS player_id, player_uuid AS uuid, player_nick AS nick, player_last_online AS last_online\n      FROM uuid_map\n      WHERE player_uuid = ? LIMIT 1\n    ");a.bind([e]);let r=null;if(a.step()){let e=a.getAsObject();r={player_id:e.player_id,uuid:e.uuid,nick:e.nick,last_online:new Date(Number(e.last_online))}}if(a.free(),!r)return{success:!1,error:"Player not found",player:null};let n=t.prepare("\n      SELECT score\n      FROM hall_of_fame\n      WHERE player_id = ? LIMIT 1\n    ");n.bind([r.player_id]);let o=0;n.step()&&(o=n.getAsObject().score),n.free();let i={};for(let e of l){let a=t.prepare("\n        SELECT stat_name, amount AS value, position\n        FROM ".concat(e,"\n        WHERE player_id = ?\n        ORDER BY position ASC\n      "));a.bind([r.player_id]);let n=[];for(;a.step();){let e=a.getAsObject();n.push({name:e.stat_name,value:e.value,position:e.position})}a.free(),n.length>0&&(i[e]=n)}return{success:!0,error:null,player:{nick:r.nick,uuid:r.uuid,last_online:new Date(Number(r.last_online)),hof:o,stats:i}}}catch(e){return console.error("Error fetching player data:",e),{success:!1,error:e.message,player:null}}}async function u(e){try{let t=await s();if(!t)return{success:!1,error:"Database not loaded",player:null};let a=t.prepare("\n      SELECT id AS player_id, player_uuid AS uuid, player_nick AS nick, player_last_online AS last_online\n      FROM uuid_map\n      WHERE id = ? LIMIT 1\n    ");a.bind([e]);let r=null;if(a.step()){let e=a.getAsObject();r={player_id:e.player_id,uuid:e.uuid,nick:e.nick,last_online:new Date(Number(e.last_online))}}if(a.free(),!r)return{success:!1,error:"Player not found",player:null};let n=t.prepare("\n      SELECT score\n      FROM hall_of_fame\n      WHERE player_id = ? LIMIT 1\n    ");n.bind([r.player_id]);let o=0;n.step()&&(o=n.getAsObject().score),n.free();let i={};for(let e of l){let a=t.prepare("\n        SELECT stat_name, amount AS value, position\n        FROM ".concat(e,"\n        WHERE player_id = ?\n        ORDER BY position ASC\n      "));a.bind([r.player_id]);let n=[];for(;a.step();){let e=a.getAsObject();n.push({name:e.stat_name,value:e.value,position:e.position})}a.free(),n.length>0&&(i[e]=n)}return{success:!0,error:null,player:{nick:r.nick,uuid:r.uuid,last_online:new Date(Number(r.last_online)),hof:o,stats:i}}}catch(e){return console.error("Error fetching player data:",e),{success:!1,error:e.message,player:null}}}async function _(){try{let e=await s();if(!e)return{success:!1,error:"Database not loaded",data:null};let t=e.prepare("\n      SELECT \n        hof.player_id,\n        um.player_uuid AS uuid,\n        um.player_nick AS nick,\n        hof.score\n      FROM hall_of_fame hof\n      INNER JOIN uuid_map um ON hof.player_id = um.id\n      ORDER BY hof.score DESC\n      LIMIT 15\n    "),a=[];for(;t.step();){let e=t.getAsObject();a.push({id:e.player_id,uuid:e.uuid,nick:e.nick,score:e.score})}return t.free(),{success:!0,error:null,data:a}}catch(e){return console.error("ERROR (getHallOfFameData):",e),{success:!1,error:e.message,data:null}}}async function c(){try{let e=await s();if(!e)return{success:!1,error:"Database not loaded",data:null};let t=e.prepare("\n      SELECT\n        last_update,\n        server_desc,\n        server_url,\n        server_icon\n      FROM sync_metadata\n      LIMIT 1\n    "),a=null;if(t.step()){let e=t.getAsObject(),r=e.server_icon?"data:image/png;base64,".concat(btoa(String.fromCharCode(...new Uint8Array(e.server_icon)))):"/assets/server_missing_img.webp",n=e.server_desc?e.server_desc:"\xa7cPowered by\xa7r\n\xa7a\xa7lPlayer statistics \xa77\xa78(no motd found)",l=e.server_url?e.server_url:"https://modrinth.com/mod/player-statistics";a={last_update:new Date(e.last_update),desc:n,url:l,icon:r}}if(t.free(),!a)return{success:!1,error:"No server data found",data:null};return{success:!0,error:null,data:a}}catch(e){return console.error("ERROR (getServerData):",e),{success:!1,error:e.message,data:null}}}async function d(){try{let e=await s();if(console.log(e),!e)return{success:!1,error:"Database not loaded",data:null};let t=e.prepare("\n      SELECT \n        (SELECT server_name FROM sync_metadata LIMIT 1) AS server_name,\n        (SELECT server_url FROM sync_metadata LIMIT 1) AS server_url,\n        (SELECT COUNT(*) FROM uuid_map) AS player_count,\n        SUM(CASE WHEN stat_name = 'play_time' THEN amount ELSE 0 END) AS total_play_time,\n        SUM(CASE WHEN stat_name = 'damage_dealt' THEN amount ELSE 0 END) AS total_damage_dealt,\n        (SELECT SUM(amount) FROM custom \n          WHERE stat_name IN (\n            'climb_one_cm', \n            'crouch_one_cm', \n            'fall_one_cm', \n            'fly_one_cm', \n            'sprint_one_cm', \n            'swim_one_cm', \n            'walk_one_cm', \n            'walk_on_water_one_cm', \n            'walk_under_water_one_cm',\n            'boat_one_cm', \n            'aviate_one_cm', \n            'horse_one_cm', \n            'minecart_one_cm', \n            'pig_one_cm', \n            'strider_one_cm'\n          )\n        ) AS total_travelled_distance,\n        (SELECT SUM(amount) FROM broken) AS total_broken_tools,\n        (SELECT SUM(amount) FROM crafted) AS total_crafted_items,\n        (SELECT SUM(amount) FROM mined) AS total_mined_blocks,\n        (SELECT SUM(amount) FROM killed) AS total_killed_mobs,\n        (SELECT SUM(amount) FROM dropped) AS total_dropped_items,\n        (SELECT SUM(amount) FROM picked_up) AS total_pickedup_items\n      FROM custom;\n    "),a={};return t.step()&&(a=t.getAsObject()),t.free(),{success:!0,data:{server_name:a.server_name||"Unknown",server_url:a.server_url||"#",stats:{player_count:a.player_count||0,total_play_time:a.total_play_time||0,total_damage_dealt:a.total_damage_dealt||0,total_travelled_distance:a.total_travelled_distance||0,total_broken_tools:a.total_broken_tools||0,total_crafted_items:a.total_crafted_items||0,total_mined_blocks:a.total_mined_blocks||0,total_killed_mobs:a.total_killed_mobs||0,total_dropped_items:a.total_dropped_items||0,total_pickedup_items:a.total_pickedup_items||0}},error:null}}catch(e){return console.error("ERROR (getServerStats):",e),{success:!1,data:null,error:e.message}}}}}]);