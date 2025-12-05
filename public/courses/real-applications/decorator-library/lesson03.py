def parent():
    print("Parent started")

    def child():
        print("Child running")

    child()
    print("Parent finished")

parent()
