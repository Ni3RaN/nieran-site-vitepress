import{_ as s,c as a,o as n,d as l}from"./app.26036da2.js";const A=JSON.parse('{"title":"Narcissus","description":"","frontmatter":{},"headers":[{"level":2,"title":"项目结构","slug":"项目结构","link":"#项目结构","children":[]},{"level":2,"title":"快速运行","slug":"快速运行","link":"#快速运行","children":[{"level":3,"title":"环境","slug":"环境","link":"#环境","children":[]},{"level":3,"title":"依赖安装","slug":"依赖安装","link":"#依赖安装","children":[]},{"level":3,"title":"运行前的准备","slug":"运行前的准备","link":"#运行前的准备","children":[]},{"level":3,"title":"编译","slug":"编译","link":"#编译","children":[]},{"level":3,"title":"运行","slug":"运行","link":"#运行","children":[]}]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"relativePath":"Narcissus/quick-start.md"}'),p={name:"Narcissus/quick-start.md"},o=l(`<h1 id="narcissus" tabindex="-1">Narcissus <a class="header-anchor" href="#narcissus" aria-hidden="true">#</a></h1><h2 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Narcissus</span></span>
<span class="line"><span style="color:#A6ACCD;">├─CMakeLists.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">├─config.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─start.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">├─src</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─config.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─config.h</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─main.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─webserver.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─webserver.h</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─timer</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |   ├─Utils.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |   ├─Utils.h</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |   ├─util_timer.h</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |   ├─set</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |   |  ├─set_timer.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |   |  └set_timer.h</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |   ├─heap</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |   |  ├─heap_timer.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |   |  └heap_timer.h</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─threadpool</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |     └threadpool.h</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |   ├─sql_connection_pool.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |   └sql_connection_pool.h</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─log</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |  ├─log.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |  └log.h</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─lock</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |  ├─block_queue.h</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |  └locker.h</span></span>
<span class="line"><span style="color:#A6ACCD;">|  ├─http</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |  ├─http_conn.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;">|  |  └http_conn.h</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="快速运行" tabindex="-1">快速运行 <a class="header-anchor" href="#快速运行" aria-hidden="true">#</a></h2><h3 id="环境" tabindex="-1">环境 <a class="header-anchor" href="#环境" aria-hidden="true">#</a></h3><ul><li>服务器测试环境 <ul><li>Ubuntu版本20.04</li><li>MySQL版本8.0.31</li><li>gcc版本9.4.0</li><li>cmake版本3.16.3</li></ul></li><li>浏览器测试环境 <ul><li>Chrome</li><li>FireFox</li></ul></li></ul><h3 id="依赖安装" tabindex="-1">依赖安装 <a class="header-anchor" href="#依赖安装" aria-hidden="true">#</a></h3><ul><li>mysqlclient</li><li>jsoncpp</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt-get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libmysqlclient-dev</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt-get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libjsoncpp-dev</span></span>
<span class="line"></span></code></pre></div><h3 id="运行前的准备" tabindex="-1">运行前的准备 <a class="header-anchor" href="#运行前的准备" aria-hidden="true">#</a></h3><ul><li>创建数据库</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">建立yourdb库</span></span>
<span class="line"><span style="color:#FFCB6B;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">database</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yourdb</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">创建user表</span></span>
<span class="line"><span style="color:#FFCB6B;">USE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yourdb</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">username</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">char</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NULL,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">passwd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">char</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NULL</span></span>
<span class="line"><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">ENGINE=InnoDB</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">添加数据</span></span>
<span class="line"><span style="color:#FFCB6B;">INSERT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INTO</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">username,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">passwd</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">VALUES</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">passwd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><ul><li>修改配置文件config.json</li></ul><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">config</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">port</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">log_write</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">trig_mode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">listen_trig_mode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">conn_trig_mode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">opt_linger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">sql_num</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">thread_num</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">close_log</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">mysql</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">port</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3306</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">username</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">password</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">database</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">timer_mode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>修改数据库相关配置</p><h3 id="编译" tabindex="-1">编译 <a class="header-anchor" href="#编译" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/start.sh</span></span>
<span class="line"></span></code></pre></div><h3 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./build</span></span>
<span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/Narcissus</span></span>
<span class="line"></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><p>在build文件夹下创建root文件夹，将静态资源放入root文件夹下，即可通过浏览器访问localhost:9000</p>`,21),e=[o];function t(c,r,D,C,y,i){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};
