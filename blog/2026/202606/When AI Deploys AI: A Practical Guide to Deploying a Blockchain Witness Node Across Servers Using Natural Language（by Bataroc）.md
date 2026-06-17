# When AI Deploys AI: A Practical Guide to Deploying a Blockchain Witness Node Across Servers Using Natural Language（by Bataroc）
### 当 AI 部署 AI：使用自然语言跨服务器部署区块链见证节点的实用指南（by Bataroc）

---

## ✍️ 写在前面的话

在 2026 年 6 月 7 日的 Jouleverse CGC 会议上，我有幸作为参与者与见证者，亲历了一场属于未来的技术范式转移：

**教链的 AI 智能体"小新"，跨主机自主裂变并部署了属于我的 AI 智能体"小Roc"；随后，小Roc 仅凭自然语言指令，便在云主机上成功安装并运行了 Jouleverse 主网见证节点。**

这一跃迁彻底颠覆了传统的认知。AI 的涌现正在以激进的速度推进**技术民主化**（Technological Democratization），将代码所有者与不懂编程者之间的数字鸿沟，抹平到几近于零。过去需要高昂学习成本、冗长命令行操作的硬核技术，如今已被重构为极低门槛的**自然语言接口**（Natural Language Interface）。

**本文是对当日两小时直播会议的精华蒸馏。其目的不仅在于沉淀社区的实践成果，更希望为所有认同区块链精神、渴望参与公链治理，却因"技术门槛"望而却步的主权个体，提供一份可复制的范式样本。**

人类向左，智能体向右。让我们用 AI 开启个人主权自主演进的新纪元。

---

## 📌 目录

1. 参考资料
2. 角色与职责
3. 演示第一部分：使用既有智能体跨主机自动安装 OpenClaw
4. 演示第二部分：使用新部署智能体安装并管理 Jouleverse 见证节点
5. 底层技术拓扑
6. 小结

---

## 1. 参考资料

### Jouleverse CGC 会议（2026.06.07）回放

**📹 会议录像**
回放链接：https://meeting.tencent.com/crm/KzbkjVOZ20 （访问密码：ZXJB）

**📝 文本转写**
转写文件：https://meeting.tencent.com/ctm/KwW9zm9qad （访问密码：I1BD）

### Jouleverse Mainnet节点搭建指南（2026版）

https://wiki.jouleverse.com/#!/docs/network/how-to-setup-jouleverse-node.md

---

## 2. 角色与职责

| 角色 | 现实实体 | 系统定位 | 核心职责 |
|------|---------|---------|---------|
| 教链（安装人） | 既有节点运维者 | Installer | 驱动其宿主系统的 OpenClaw 智能体（小新），跨主机远程为他人安装环境 |
| Bataroc（被安装人） | 独立节点建设者 | Operator | 提供空白云主机（VPS），接收远程部署，获取专属智能体（小Roc）并执行后续运维 |

**核心本质**：这是一次典型的 **Recursive Agent Deployment（智能体递归部署）** 实验。即：

> AI 安装 AI → 新 AI 异步摄取新知识 → 新 AI 运维 Decentralized Infrastructure

---

## 3. 演示第一部分：使用既有智能体跨主机自动安装 OpenClaw

本阶段自 00:08 正式开始，核心目标是通过自动化网络协议，在空白 VPS 上繁衍出新的智能体。

### Step 1：生成远程登录密钥对（00:10:41 — 00:11:15）

教链在飞书向已有智能体（小新）下达自然语言指令："重新生成新的 SSH 登录密钥并告诉我公钥"。

- **智能体自主行为**：执行 `ssh-keygen`
- **交付物**：Private Key（私钥）与 Public Key（公钥）
- **目的**：赋予智能体登录 Bataroc 云主机的身份凭证

### Step 2：写入服务器授权文件（00:12:20 — 00:18:27）

教链将生成的公钥传递给 Bataroc，Bataroc 登录其腾讯云 VPS 执行：

```bash
echo "公钥内容" >> ~/.ssh/authorized_keys
cat ~/.ssh/authorized_keys  # 验证写入
```

**底层原理**：公钥认证（Public Key Authentication），借此实现远程非对称加密免密登录。

### Step 3：智能体跨主机远程登录（00:18:48 — 00:25:23）

教链指示小新："尝试登录服务器，IP：xxx.xxx.xxx.xxx，用户名：ubuntu"。

- **执行迭代**：首次由于 AI 密钥匹配失误导致连接失败（翻车实例，证实 LLM 现阶段仍需人类进行边界审计）；经重新生成密钥并二次配置后，于 00:25:23 成功登入目标主机。
<img width="1194" height="515" alt="image" src="https://github.com/user-attachments/assets/d1bf636a-18c5-44fc-a3ab-53dfed8e4eeb" />

### Step 4：OpenClaw 智能体全自动安装（00:25:23 — 00:34:38）

教链下达指令："安装 OpenClaw，指定 2026年5月20日稳定版本"。

- **智能体自主行为**：自主调配并安装 Node.js、npm、OpenClaw 核心依赖库、网关（Gateway）及相关配置文件
- **效率表现**：全程耗时约 4 分钟，人类未输入任何 Linux 命令
<img width="1080" height="822" alt="image" src="https://github.com/user-attachments/assets/5d67f460-cc74-4796-9b56-69314dc97f11" />

### Step 5：构建大模型生产要素（00:27:58 — 00:30:46）

Bataroc 登录 DeepSeek 开放平台，在 API Keys 页面创建新密钥，获取 `sk-xxxxxxxx`。
<img width="1920" height="514" alt="image" src="https://github.com/user-attachments/assets/0f608ffa-9641-4f12-bf2b-3273b8de7c82" />

- **技术作用**：为新智能体注入底层大语言模型（LLM）的算力接口

### Step 6：创建前端通信通道（00:31:09 — 00:33:57）

Bataroc 登录飞书开放平台创建企业自建智能体，获取 `APP_ID` 与 `APP_SECRET`。
<img width="1641" height="373" alt="image" src="https://github.com/user-attachments/assets/a86b3764-ab82-4758-a8f0-62251e13311f" />

- **技术作用**：建立用户与智能体交互的图形化表现层

### Step 7：智能体自主完成最终装配（00:35:00 — 00:46:34）

教链将上述 Step 5 与 Step 6 获得的凭证提供给小新。小新在远端 VPS 上全自动配置环境：

- 注入 DeepSeek API 与飞书连接参数
- 配置 WebSocket 通信及配置守护进程（Systemd）实现开机自启
<img width="1640" height="1136" alt="8e685b2ed0dd9f80fde771099d7f602c" src="https://github.com/user-attachments/assets/982e3add-20eb-4366-b67b-7a0f15b3ab72" />
<img width="1374" height="1360" alt="aadfe5bf436f72387333b8217cae50d5" src="https://github.com/user-attachments/assets/b15cdaaa-6030-48a3-8b2d-0ccc0b266724" />

**阶段成果**：于 00:46:34 正式宣告 Bataroc 的独立智能体——"**小Roc**"诞生。


### Step 8：首次配对与上线验证（00:53:42 — 00:55:37）

触发 OpenClaw 的内建安全机制，教链让小新在宿主端远程执行 `openclaw pairing` 完成安全配对授权。Bataroc 在飞书端发送"你好"，小Roc 成功响应，标志着部署圆满完成。
<img width="1041" height="487" alt="image" src="https://github.com/user-attachments/assets/7ae6d301-4257-4b27-81f5-fc25a4d3d10c" />


---

## 4. 演示第二部分：使用新部署智能体安装并管理 Jouleverse 见证节点

本阶段自 00:58 开始，展示新型 Natural Language Interface 如何直接操纵底层基础设施。

```
[Bataroc] ──(提供Wiki链接)──> [小Roc] ──(Knowledge Ingestion)──> [自主执行 Shell 命令] ──> [成功交付 Node]
```

### Step 9：智能体异步知识摄取（00:58:52 — 01:00:40）

Bataroc 将 Jouleverse 节点官方 Wiki 文档链接发送给小Roc，并下达指令："先学习一下这个文档"。

- **智能体自主行为**：自主抓取网页、解析文本结构并提取部署逻辑
- **底层原理**：知识摄取（Knowledge Ingestion），在 1 分钟内完成硬核文档的理解吞噬
<img width="897" height="757" alt="image" src="https://github.com/user-attachments/assets/b2bd7e11-9541-4fee-83b6-3245ebcab465" />


### Step 10：旧环境清理与状态审计（01:01:17 — 01:06:26）

Bataroc 指令："检查当前服务器节点状态并清理旧节点"。

- **智能体自主行为**：执行 `jnode status` 发现旧节点残余；随后自主调用 Docker 指令停止容器，执行 `mv witness backup/` 备份核心数据与 nodekey，彻底净化环境
<img width="2167" height="2414" alt="ea441a792ab3b1e40f3e7ee43ed2c6d2" src="https://github.com/user-attachments/assets/f0eee08a-bb27-41e5-b48f-183f69bdff0a" />


### Step 11：自驱动部署新节点与环境修复（01:07:32 — 01:13:00）

Bataroc 键入："请帮我安装 Witness Node"。
<img width="836" height="716" alt="image" src="https://github.com/user-attachments/assets/8d53246a-b2bd-4f4f-9b4d-0295f1a0fcb7" />

- **智能体自主行为**：拉取最新节点程序、解压、初始化并启动容器
- **异常处理**：编译过程中小Roc主动发现 `jnode` 命令未写入环境变量，于是自主修改 `~/.bashrc` 并执行 `source`，修复系统环境
<img width="2358" height="2412" alt="56da7868b4c274fe3b77d936f851dd4a" src="https://github.com/user-attachments/assets/b0601098-e324-402f-8a1d-cf5836596cfd" />


### Step 12：数据恢复与区块同步优化（01:15:02）

这一步是在会议演示中为了规避数小时的漫长全量同步，Bataroc 指示智能体利用 Step 10 的备份进行数据恢复。
但是操作中遇到问题，最终决定还是正常从头同步区块，不利用备份的数据了。
正常讲，第一次搭建节点就是要从头同步区块
<img width="736" height="569" alt="image" src="https://github.com/user-attachments/assets/186d38cb-127e-4522-afb6-4549b0f0f4a4" />

### Step 13：几个小时后，小新给我第一份节点运维报告🤩
<img width="1080" height="2952" alt="7340abd7c4d6d5dd1697e80fa8a17821" src="https://github.com/user-attachments/assets/5b1853c3-980e-470d-882f-cfbc0160113c" />

从此告别苦哈哈地对着黑底白字的页面一行行问AI操作...

### Step 14：人工治理审计

智能体完成技术层的部署与同步后，人类节点所有者介入进行最终的链上治理合规操作：填写节点登记表、开放 RPC 端口进行审计检查，并完成必要的 KYC 身份认证。

---

## 5. 底层技术拓扑

### 🌐 智能体自我复制网络拓扑

```
[教链已有智能体: 小新]
       │ (通过 SSH 协议跨主机登录)
       ▼
[Bataroc 的空白云主机] ──(自动安装环境)──> [孕育新智能体: 小Roc]
                                                 │ (通过 Knowledge Ingestion 学习)
                                                 ▼
                                        [自主运维 Jouleverse 见证节点]
```

## 6. 小结
### 🧠 三大演化认知

1. **智能体的网络自复制**：本次实验跨越了"人机交互"的传统边界，跨入了 Agent-to-Agent Deployment 的新阶段。智能体表现出了非生物状态下的结构性扩散与自复制能力。

2. **自然语言运维（Natural Language Operations, NLOps）的降临**：传统的 CLI（命令行界面）正在被解构。人类的意图（Intent）无需再翻译为死板的 Shell 语法，自然语言已成为最高效的生产力媒介。

3. **基础设施建设的门槛崩塌**：过去由 Linux、Docker、网络拓扑等技术栈构筑的专业壁垒，在 Technological Democratization 的浪潮下被彻底推倒。去中心化网络的节点扩张，将不再受限于技术精英阶层，而是真正走向广泛的主权个体。

## 6. 写在最后
如果有新人加入Jouleverse社区准备搭建见证节点，我愿提供全程帮助。

如果有core成员需要在自己云主机部署机器人进行自动化运维，我可以用我的小Roc帮你部署你的机器人。

在互相帮助中，相互提升。

联系方式在最后。

---

作者：Bataroc J-67（微信rocamazinggoal，欢迎交流~~）

编辑：	

审校：
