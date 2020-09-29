module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,45,153,75,150,236,170,14,68,39,116,26,137,245,131,177,220,245,230,63,141,23,91,81,141,20,46,131,100,199,54,70,50,245,223,155,127,239,254,123,239,223,249,253,244,59,250,125,250,133,126,169,95,233,215,250,141,126,87,63,141,59,26,119,52,238,104,220,209,184,163,113,71,227,142,198,29,141,59,26,119,52,238,211,184,79,227,62,141,27,29,95,29,223,254,247,125,161,95,234,87,250,241,247,232,119,245,123,255,190,248,233,119,244,251,244,211,184,208,184,208,184,208,184,208,184,208,184,208,184,212,184,212,184,212,184,212,184,212,184,212,184,212,184,212,152,212,152,210,152,210,152,210,152,210,152,210,152,210,152,82,156,82,127,171,175,117,190,117,174,117,174,117,110,116,110,116,110,116,110,116,110,116,78,247,253,93,157,187,58,119,117,238,234,220,211,185,167,115,79,231,68,240,19,191,16,187,16,183,16,179,16,175,16,171,16,167,16,167,16,163,16,159,16,155,16,151,16,147,16,131,144,254,248,56,167,177,210,29,210,28,210,27,210,26,210,25,210,24,210,23,210,22,169,115,210,21,210,20,210,19,210,18,210,18,210,18,210,18,210,18,210,18,210,18,210,18,210,18,210,18,210,18,163,107,92,93,247,234,186,210,18,87,215,150,150,144,150,120,58,247,116,31,210,145,122,246,169,251,79,221,123,234,57,167,238,63,117,239,169,231,154,122,166,169,231,153,186,239,212,125,167,158,91,234,190,83,207,42,245,124,82,207,38,117,191,169,103,146,186,223,212,179,72,221,115,138,123,234,62,179,21,175,213,215,250,187,213,215,26,175,121,145,163,115,163,115,163,115,98,158,98,158,98,158,186,207,20,243,212,125,166,238,51,197,60,197,60,197,60,117,191,41,230,37,230,165,251,45,241,46,221,115,233,126,75,115,178,52,31,75,247,92,186,231,210,61,151,230,92,105,190,149,238,185,116,207,37,214,37,214,37,214,37,214,37,214,165,123,47,177,46,221,123,233,190,75,172,75,172,75,172,75,172,75,26,74,172,75,172,75,172,75,58,74,188,75,90,74,204,75,122,74,220,75,122,74,204,75,122,74,220,75,58,74,58,74,58,74,58,74,58,74,204,75,90,234,41,134,244,148,244,148,248,151,94,197,146,174,214,187,216,210,214,122,30,173,57,213,122,23,91,58,91,239,98,75,107,235,93,108,233,109,61,163,150,230,214,28,107,233,110,61,171,150,246,214,92,107,233,111,205,183,22,131,214,156,107,113,104,205,187,22,139,214,51,108,241,104,61,199,22,147,214,28,108,113,105,189,127,45,54,173,103,218,226,211,122,255,90,140,90,207,183,197,169,245,140,91,172,90,239,95,139,87,235,89,183,152,181,222,191,22,183,214,51,111,177,107,189,131,45,126,173,119,176,197,176,245,14,182,56,182,230,66,139,101,151,198,137,103,151,198,137,105,139,105,107,110,180,184,182,184,182,184,182,184,182,184,182,184,182,184,182,230,74,107,78,183,248,182,230,117,107,206,180,56,183,56,183,230,77,139,117,107,238,180,230,121,107,254,180,230,122,139,125,107,174,183,248,183,214,158,214,51,184,226,127,197,255,138,255,19,183,39,45,79,90,94,114,172,115,210,242,164,229,73,203,147,150,39,45,79,90,158,180,60,105,121,210,242,164,229,73,203,147,150,39,45,79,90,158,180,60,105,121,154,231,79,122,158,244,60,233,121,210,243,164,231,73,207,147,158,39,61,79,122,158,244,60,233,121,210,243,164,231,73,207,147,150,55,172,200,58,175,251,127,186,255,167,123,127,151,115,242,209,189,63,238,91,115,230,177,114,123,221,102,209,222,21,123,151,235,93,171,119,177,102,181,254,157,93,214,25,194,98,253,99,149,254,177,60,255,88,159,127,195,98,63,116,12,203,253,16,96,118,193,39,202,16,101,24,124,25,204,10,254,187,120,92,60,46,30,23,143,139,199,221,28,129,199,197,227,225,241,240,120,120,60,60,30,30,15,143,135,199,195,227,109,90,217,188,66,98,65,204,166,160,205,65,155,132,54,11,109,26,218,60,180,137,200,153,200,169,8,143,77,70,155,141,54,29,109,62,218,132,180,25,105,83,18,162,55,33,157,143,113,31,67,62,122,63,58,130,142,160,35,232,8,58,130,142,164,35,55,207,209,145,116,36,29,69,71,209,209,107,54,5,210,219,244,14,189,128,61,48,61,224,60,144,220,52,120,224,119,64,119,238,102,76,58,96,117,192,116,32,116,128,115,222,230,81,146,40,52,62,64,124,48,248,144,255,161,252,67,244,135,222,15,149,223,102,93,82,46,57,246,144,96,15,217,245,144,90,15,185,245,144,88,15,89,245,144,82,15,249,244,144,76,15,153,244,144,70,101,232,64,37,25,244,144,62,15,185,243,144,60,15,217,243,144,62,15,249,243,144,64,15,25,244,144,66,15,57,244,144,68,15,89,244,144,70,15,121,244,144,72,15,153,244,144,74,15,185,244,144,76,15,217,244,144,78,15,249,244,144,80,15,25,85,15,97,48,23,195,159,76,194,32,10,121,236,144,200,14,153,76,166,48,141,193,131,73,72,106,211,3,196,131,240,100,57,25,60,152,132,193,133,200,122,135,180,39,131,7,151,76,38,97,66,156,92,40,19,152,196,20,166,49,131,185,24,60,152,132,36,74,25,60,120,30,228,76,153,250,55,100,75,153,61,106,204,96,46,230,201,232,161,200,28,204,135,9,12,30,129,71,224,17,120,4,30,129,71,226,145,120,36,30,137,71,226,145,120,36,30,137,71,226,145,120,20,30,133,71,225,81,120,20,30,133,71,225,81,120,20,30,133,71,227,209,120,52,30,141,71,227,209,120,52,30,122,220,83,154,102,67,106,149,73,76,97,26,179,189,23,163,120,133,74,82,174,12,30,168,44,84,146,126,101,240,64,101,161,146,84,60,133,74,18,178,12,30,168,36,47,203,48,24,129,133,64,114,244,20,2,201,212,50,12,70,96,33,144,172,45,131,7,2,11,129,100,240,41,4,146,199,101,240,64,32,233,124,200,231,67,66,159,90,129,141,71,227,49,120,12,30,131,199,224,49,120,12,30,131,199,224,161,201,58,100,159,33,245,12,121,103,72,58,50,138,210,143,142,71,199,163,227,209,161,89,55,163,9,39,19,152,194,12,134,142,67,199,161,131,217,52,135,142,67,199,71,7,236,7,236,3,241,1,246,192,121,64,60,208,29,192,14,76,7,156,3,201,129,228,0,113,224,55,160,27,168,13,192,6,86,3,166,129,208,0,103,224,50,32,25,104,12,32,6,6,131,252,65,249,12,29,40,31,148,15,202,7,229,131,242,65,249,160,124,80,62,40,31,148,95,148,95,148,95,148,95,148,95,148,95,148,95,148,95,148,95,148,95,148,95,148,95,148,95,148,95,148,95,148,95,166,217,69,254,101,154,93,24,92,166,217,5,196,69,254,69,254,205,253,19,55,228,95,228,95,228,95,228,95,228,95,228,95,228,95,228,95,228,95,228,95,228,95,228,95,228,95,228,95,228,95,228,95,228,95,228,95,228,95,228,95,228,83,115,12,5,135,12,29,200,191,200,127,200,127,200,127,200,127,200,127,200,127,200,127,200,127,200,127,200,127,200,127,200,127,200,127,200,127,200,127,200,127,188,71,143,199,253,120,143,30,207,156,218,102,40,110,134,234,102,40,111,134,250,101,40,96,134,10,102,40,97,134,26,102,40,98,134,234,100,40,79,134,250,100,40,80,134,10,101,40,81,134,26,69,6,143,203,209,221,35,124,145,250,46,190,232,125,15,95,10,173,159,214,211,75,133,34,243,97,2,147,152,146,81,138,150,25,204,197,60,153,15,143,15,143,15,143,15,143,224,40,246,8,223,192,55,240,13,124,3,223,192,55,57,74,142,138,40,69,148,194,183,240,45,124,11,223,194,183,240,45,60,10,143,198,163,241,104,198,53,227,154,113,205,184,102,92,51,110,24,55,140,187,28,221,61,226,26,151,107,92,124,47,190,23,95,10,78,138,157,75,177,115,41,118,46,197,206,165,216,185,20,59,151,98,231,82,236,92,138,152,75,17,115,41,98,46,69,204,165,136,185,212,47,151,250,229,42,197,202,4,190,129,47,92,14,72,168,90,238,73,142,114,143,24,167,57,174,151,135,193,128,56,8,60,189,71,184,53,23,66,42,165,139,12,30,72,61,195,213,134,171,33,240,160,141,130,229,242,101,171,247,75,29,228,138,75,114,184,36,135,75,54,184,124,151,221,66,22,95,100,50,23,163,193,197,221,243,37,118,139,71,203,247,216,37,77,220,34,159,159,240,62,194,214,110,177,197,91,108,245,22,91,190,197,214,111,177,5,92,108,5,199,247,51,118,235,181,111,125,183,158,227,123,26,187,190,223,250,110,117,199,247,53,118,125,99,125,255,106,189,245,117,201,23,235,235,202,47,214,215,5,96,172,239,214,129,145,235,187,229,96,228,250,110,85,24,185,190,91,28,70,174,239,214,136,145,235,187,165,98,212,250,110,197,24,181,190,229,82,115,125,107,125,107,125,107,125,107,125,123,199,111,97,25,189,189,189,231,103,163,205,198,49,195,235,227,141,249,108,215,235,185,140,221,58,118,43,235,45,104,92,204,184,144,113,17,227,2,198,197,203,22,46,216,237,93,230,185,180,115,57,231,18,206,101,155,75,53,195,37,242,246,46,195,92,122,233,250,217,5,180,43,104,151,208,174,161,151,76,46,147,44,215,215,219,187,4,40,68,100,151,64,110,125,157,203,33,183,194,206,45,177,115,107,236,220,34,59,199,197,249,246,110,157,157,91,104,231,50,201,45,181,115,107,237,220,98,59,183,218,78,170,194,83,59,163,106,53,214,231,51,177,118,119,182,86,111,237,140,170,85,93,59,163,106,181,215,206,168,10,127,11,172,239,114,168,157,81,181,52,106,103,84,45,147,218,25,85,75,166,118,70,213,242,169,157,81,181,148,106,103,84,45,171,218,25,85,75,172,118,70,149,63,62,118,70,149,191,65,118,70,213,50,172,157,81,181,36,107,103,20,181,143,190,211,249,226,206,239,239,248,174,229,59,254,235,223,218,253,150,231,11,60,169,218,177,59,126,118,252,236,120,190,173,139,121,142,237,181,179,246,174,221,222,253,222,143,253,226,15,127,243,239,87,127,236,119,127,236,151,127,236,183,127,236,215,127,236,247,63,59,88,178,189,190,189,190,189,190,189,190,189,190,189,190,189,190,189,190,189,190,189,190,236,13,244,238,154,244,238,155,244,238,156,244,238,157,244,238,158,244,238,159,244,238,160,244,238,161,244,238,162,244,238,163,244,238,164,244,238,165,244,238,166,244,238,167,244,238,168,244,238,169,244,238,170,244,238,171,244,238,172,244,238,173,244,238,174,244,238,175,244,238,176,244,238,177,244,238,178,244,238,179,244,238,180,244,238,181,244,238,182,244,238,183,244,238,184,244,238,185,244,238,186,244,238,187,244,238,188,244,238,189,244,238,190,244,238,191,244,238,192,116,239,252,121,119,39,217,187,59,203,212,180,155,113,115,221,120,228,78,181,119,119,174,169,249,220,132,27,71,73,71,73,71,73,71,73,71,73,71,41,71,41,71,41,71,41,71,41,71,41,71,41,71,41,71,41,71,41,71,185,238,187,238,187,238,243,39,240,125,190,130,191,133,239,243,21,158,67,251,179,248,62,187,251,251,248,62,187,239,18,167,178,227,231,230,184,249,220,132,155,116,83,110,218,141,191,178,119,75,225,189,159,163,28,71,57,142,98,144,207,32,159,65,62,131,124,6,249,12,242,25,228,51,200,103,144,207,32,159,65,62,131,124,6,249,12,242,25,228,51,200,103,144,207,32,159,65,62,131,124,6,249,12,146,157,166,109,28,165,29,165,29,197,32,159,65,62,131,124,239,175,207,161,255,118,24,76,240,121,171,129,122,109,155,227,230,115,19,110,202,77,187,25,55,215,141,221,143,221,143,221,143,221,143,221,73,238,52,142,146,238,75,247,165,251,242,175,207,87,72,95,33,125,133,244,21,202,87,40,95,161,28,165,28,165,28,165,28,165,28,165,28,165,28,165,28,165,29,165,29,165,29,165,29,165,29,165,29,165,29,165,29,229,185,239,185,239,185,239,253,245,249,10,127,123,54,6,121,12,242,24,228,49,200,221,213,162,41,55,237,102,220,92,55,142,98,158,199,60,143,121,30,243,60,230,121,204,115,119,187,104,28,229,56,138,255,15,115,204,243,152,231,49,207,99,158,199,60,143,121,30,243,60,230,121,204,243,152,231,49,207,99,158,199,60,143,121,30,243,60,230,121,204,243,152,231,49,207,99,158,199,60,143,121,158,118,148,118,148,113,148,113,20,243,252,219,3,251,204,243,111,51,236,51,207,191,93,177,207,60,255,182,199,62,243,252,219,39,251,204,211,27,102,250,172,112,20,243,252,204,211,91,104,106,28,197,60,63,243,252,204,211,123,107,106,28,229,115,148,207,81,62,71,249,28,197,60,189,111,246,251,204,211,27,104,191,207,60,189,147,246,251,204,211,91,106,191,207,60,189,183,246,251,204,211,155,108,191,207,60,189,219,166,198,81,204,243,51,79,239,191,169,113,20,243,252,204,211,59,114,106,28,101,28,101,28,101,247,232,126,97,158,97,158,97,158,241,251,235,107,55,227,230,186,217,43,132,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,110,89,79,227,40,159,163,124,142,98,158,97,158,97,158,81,127,125,190,130,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,134,121,198,31,207,113,148,113,148,113,148,221,5,253,165,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,166,121,230,231,40,159,163,132,163,132,163,152,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,154,103,254,241,188,142,114,29,229,58,202,117,148,235,40,187,225,172,156,145,110,254,254,106,55,227,230,186,217,152,101,130,101,130,101,130,101,130,101,130,101,130,101,130,101,130,101,130,101,130,101,130,101,130,251,121,64,227,40,225,40,225,40,225,40,225,40,225,40,105,247,180,187,19,102,57,97,150,19,102,57,97,150,209,149,209,149,209,213,252,245,57,180,209,149,209,149,209,149,209,149,209,149,209,149,209,149,209,213,31,186,235,40,215,81,174,163,92,71,121,142,242,28,229,57,202,115,20,39,204,114,194,44,39,204,242,202,94,94,217,219,43,123,123,101,111,175,68,237,149,168,77,176,77,176,77,176,227,175,47,221,148,155,118,51,110,174,27,95,193,32,219,32,219,32,219,32,219,32,219,32,219,153,178,157,41,219,153,178,157,41,219,43,123,123,101,111,175,236,237,149,189,189,18,181,151,160,246,18,212,126,101,218,175,76,251,149,105,191,50,109,130,109,130,109,130,109,130,109,130,109,130,109,130,109,130,109,130,237,146,163,13,178,13,114,12,114,12,114,12,114,12,114,188,164,207,223,127,144,188,4,141,151,160,241,18,52,94,130,198,75,208,120,9,26,47,65,227,55,103,252,230,140,223,156,241,155,51,126,115,198,111,206,152,224,152,224,152,224,152,224,152,224,152,224,152,224,152,224,152,224,120,45,31,131,28,131,28,131,28,131,28,131,28,131,28,175,61,227,181,103,188,246,140,215,158,241,218,51,94,123,198,107,207,120,237,25,175,61,227,55,103,252,230,140,223,156,241,155,51,126,115,198,111,206,204,251,223,255,1,48,51,6,240,46,35,0,0])))