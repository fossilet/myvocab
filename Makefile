# Since Tue Aug  5 17:19:31 CST 2014

zip:
	zip -x Makefile -r myvocab.zip *

# Make screenshot for Chrome store
shot:
	sleep 2
	screencapture -R77,80,1280,800 -T3 after.png
	screencapture -R720,355,640,400 -T3 after_small.png
