# This is only for test about persistent cache

## Changing branch dosen't affect timestamp

there are three branch main, sub, sub2.

When I change main.js in sub  
-> loader only process main.js. Because webpack use cached module data.

When I don't change any file in sub2 (all same with main)  
-> loader dosen't process any file. Compared to snapshots, nothing changed.

So, I think that simply chaning branch dosen't affect the timestamp.
