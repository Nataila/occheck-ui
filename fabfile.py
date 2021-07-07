#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: cc
# @Date  :2019-08-27

from fabric.api import put, env, local, run

env.use_ssh_config = True


def update():
    local('yarn run build --model production')
    local('tar -zcvf ui.tar.gz build')
    put('ui.tar.gz', '/tmp')
    run('tar -zxvf /tmp/ui.tar.gz -C /tmp')
    run('rm -fr /www/occheck/ui')
    run('mv /tmp/build /www/occheck/ui')
    run('nginx -s reload')
    run('rm -fr /tmp/ui.tar.gz')
    local('rm -fr ui.tar.gz')
