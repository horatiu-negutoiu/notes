# Python Threading

## Simple Example

```python
import threading
import time

exitFlag = 0

class myThread(threading.Thread):
    def __init__(self, threadID, name, counter, delay):
        threading.Thread.__init__(self)
        self.threadID = threadID
        self.name = name
        self.counter = counter
        self.delay = delay

    def run(self):
        print("Starting %s" % self.name)
        print_time(self.name, self.counter, self.delay)
        print("Exiting %s" % self.name)

def print_time(threadName, counter, delay):
    while counter:
        if exitFlag:
            threadName.exit()
        time.sleep(delay)
        print("%s: %s" % (threadName, time.ctime(time.time())))
        counter -= 1

# Create new threads
# Thread-1: run 3 times, with a delay of 2s
thread1 = myThread(1, "Thread-1", 3, 2)
# Thread-2: run 4 times, with a delay of 1s
thread2 = myThread(2, "Thread-2", 4, 1)

# Start new threads
thread1.start()
thread2.start()

print("Exiting main thread")
```

This produces:

```
Starting Thread-1
Starting Thread-2
Exiting main thread
Thread-2: Wed Dec  5 12:44:27 2018
Thread-1: Wed Dec  5 12:44:28 2018
Thread-2: Wed Dec  5 12:44:28 2018
Thread-2: Wed Dec  5 12:44:29 2018
Thread-1: Wed Dec  5 12:44:30 2018
Thread-2: Wed Dec  5 12:44:30 2018
Exiting Thread-2
Thread-1: Wed Dec  5 12:44:32 2018
Exiting Thread-1
```

