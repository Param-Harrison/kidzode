# 🏗️ APP MASTER: CASE 005
# Goal: Play Queue

class Queue:
    def __init__(self):
        self.videos = ["Vid A", "Vid B"]
    
    def play(self):
        # 1. Get and remove first item
        if len(self.videos) > 0:
            v = self.videos.pop(0)
            print("Watching:", v)
        else:
            print("Queue empty!")

q = Queue()
q.play()
q.play()
q.play()
