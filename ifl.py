#!/usr/bin/env python3

"""
Command to open first Google search result in your web browser.

Installation:
$ pip3 install requests
$ git clone https://github.com/iappp/ifl
$ cd ifl
$ chmod u+x ifl.py
$ mkdir ~/bin; ln -rs ifl.py ~/bin
$ mv ~/bin/ifl.py ~/bin/g
#                    ^^^^^ Rename this to whatever you want.

On xfce4 on Linux, I have xfrun4 mapped to Win-<Space> (aka Super-<Space> or ⌘-<Space>). Since ~/bin is in my PATH, I can hit ⌘-<Space> then ``g <my search string>'', and the first Google result appears in my browser.
"""

import requests
import sys
from subprocess import run

OPEN_COMMAND = {
    'linux': 'xdg-open',
    'darwin': 'open',
    'win32': 'explore'
}

if __name__ == '__main__':
    r = requests.get('https://www.google.com/search?hl=en&source=hp&biw=&bih=&btnI=I%27m+Feeling+Lucky&gbv=1',
                     params={'q': ' '.join(sys.argv[1:])},
                     headers={'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                              'referer': 'https://www.google.com/',
                              'accept-encoding': 'gzip, deflate, br', 'accept-language': 'en-US,en;q=0.9'},
                     allow_redirects=False)
    if r.status_code == 302:
        url = r.headers.get('location')
        open_command = OPEN_COMMAND.get(sys.platform)
        if open_command is not None:
            run([open_command, url])
