# 入网后：申请Core 🆔 与 每月链上签到指南

Author | 小新
-|-
Reviewer | 教链（J25）

## 概述

节点通过审计入网后，你还需要完成以下步骤才能正式享受 PoWh 工作量证明激励：

1. **完成高级 KYC** —— 实名认证，建立可信身份
2. **申请加入 Jouleverse Core** —— 成为核心贡献者组的一员，获得 Core 🆔（链上 NFT）
3. **获取初始 GAS** —— 为你的地址注入少量 J，以便进行链上操作
4. **每月链上签到** —— 证明维护人活跃，持续享受激励

---

## 1. 完成高级 KYC

高级 KYC 是 Jouleverse 可信身份体系的一部分，所有核心贡献者均须完成。

👉 **[点此打开 KYC 登记表单](kyc-form.html)** —— 填写后自动生成汇总信息，复制或直接通过邮件提交给审查员。

填写时请准备好：
- 你的节点信息（enode、IP 等）
- 签块地址（0x...）（仅记账节点需要）
- 个人身份信息（身份证、手机号等）

待审核通过后，你将进入下一步。

---

## 2. 申请加入 Jouleverse Core

完成高级 KYC 后，你需要正式申请加入核心贡献者组（Core）。

具体流程：

1. **在节点预备群（或 Core 群）中发言**，说明你已通过审计，请求加入 Core 组
2. **等待 Core 管理员或审计节点** 将你拉入 Core 群 / 授予 Core 身份
3. **获得 Core 🆔（链上 NFT）** —— 这是一个链上 NFT，是你加入核心贡献者组的不可篡改的链上凭证

> 💡 Core 🆔 的格式一般为 `J+数字`，例如 `J25`。全体 Core 🆔 列表请参考：[core-contributors.md](https://github.com/Jouleverse/workspace/blob/main/core-contributors.md)

---

## 3. 获取初始 GAS（燃料费）

> 💡 当前最推荐的方式是通过生态互助/免费水龙头获取初始 GAS，详见方式一。

要进行链上签到，你的地址上需要有少量 J 作为燃料费（gas fee）。如果地址里还没有 J，可以通过以下方式获取：

### 方式一：生态互助 / 免费水龙头（推荐）

由生态内其他贡献者志愿提供免费 GAS：

1. 打开 **[Jouleverse 免费水龙头](https://faucet.f7t.cn)**
2. 输入你的地址，点击领取即可获得少量免费 J
3. 每次领取的 J 足够用于签到等基础链上操作

> 💡 你也可以在节点预备群或 Core 群中向其他贡献者求助，大家通常会乐意送你 0.001 J 起步的初始燃料。

### 方式二：自行 unwrap WJ

如果你已经持有 WJ（例如通过 PoWh 空投获得）：

1. 打开 [Jouleverse 区块链浏览器](https://jscan.jnsdao.com)
2. 搜索你的地址，找到 WJ 余额
3. 点击 WJ 余额旁边的 【unwrap】按钮
4. 输入要提取的 J 数量（仅提取少量即可，如 0.001 J）
5. 确认并签名上链

> ⚠️ 注意：提取 J 是不可逆的，提取后只能消耗不能移动，所以不要一次性提取过多。

### ~~方式三：行星系统冷启动（暂停）~~

> 行星系统目前处于暂停状态，暂不支持通过此方式获取 GAS。推荐优先使用方式一免费水龙头。

---

## 4. 每月链上签到

### 为什么要签到？

链上签到是 PoWh 激励机制的核心环节。每个月你需要完成一次链上签到，以证明你的维护人身份仍然活跃。只有完成签到的贡献者，才能参与当月的 PoWh 激励分配。

### 签到前准备

- ✅ 你的地址上已有少量 J（参考第 3 节获取 GAS）
- ✅ 你的 Metamask（或其他 web3 钱包）已连接到 Jouleverse 主网
  - 网络名称：Jouleverse Mainnet
  - RPC：https://rpc.jnsdao.com:8503
  - Chain ID：3666
  - 代币符号：J

> 💡 **快速连接 MetaMask：** 打开 [chainlist.org/chain/3666](https://chainlist.org/chain/3666)，点击【连接钱包】，再点击【添加链】即可自动将 Jouleverse 网络配置添加到你的 MetaMask。

### 签到操作步骤

#### 方法：通过 wiki 首页签到

1. 打开 **[wiki.jouleverse.com](https://wiki.jouleverse.com)** 首页
2. 点击首页上的 **「签到打卡」** 按钮或链接
3. 连接你的 MetaMask 钱包（如尚未连接）
4. 确认签到交易并签名上链
5. 等待交易上链（约 10 秒），页面会显示签到成功

> 💡 签到交易的本质是调用链上合约。你可以在 [Jouleverse 区块链浏览器](https://jscan.jnsdao.com) 中搜索你的交易哈希，确认签到记录已上链。

#### 核验签到状态

PoWh 委员会每月会发布[工作量统计表](https://github.com/Jouleverse/workspace)，统计表中会列出每位 Core 成员的签到状态。具体操作：

1. 在 PoWh 统计截止前完成链上签到
2. 你的签到记录会自动或由 PoWh 委员会核验后记录在统计表中
3. 可在 PoWh 统计表的「链上签到」列（AA 列）查看签到结果：签到成功填「1」，未签到填「0」

### ⏰ 获得 Core 🆔 后请尽快签到

刚获得链上 Core 🆔 之后，**应当尽快做一次链上签到**，以确保你的 Core 🆔 与签到记录关联。

### 签到频率

- **每月至少签到 1 次**
- 建议设定每月提醒，避免漏签
- 漏签可能导致当月无法获得 PoWh 激励分配

---

## 常见问题

**Q: 签到一次大概需要多少 GAS？**
A: 链上签到属于简单的合约调用，gas 消耗很少，通常不到 0.0001 J，所以通过水龙头领取的免费 J 足够签到几十次。

**Q: 忘记签到怎么办？**
A: 当月漏签会影响当月的 PoWh 激励分配。可以联系 PoWh 委员会说明情况，但建议养成每月签到的习惯。

**Q: 我还没有 Core 🆔，可以签到吗？**
A: 建议先完成高级 KYC 并申请 Core 🆔，因为签到记录需要与 Core 🆔 关联才能计入 PoWh 统计。

---

## 相关链接

- [Jouleverse 免费水龙头](https://faucet.f7t.cn)
- [Jouleverse wiki 首页签到](https://wiki.jouleverse.com)
- [Chainlist：一键添加 Jouleverse 到 MetaMask](https://chainlist.org/chain/3666)
- [JTI 可信身份认证](https://github.com/Jouleverse/jti2/blob/main/README.md)
- [Jouleverse 区块链浏览器](https://jscan.jnsdao.com)
- [如何安装 MetaMask 并连接 Jouleverse](https://mp.weixin.qq.com/s/9TkupLVX1nqZlX4fz1TziA)
- [PoWh 工作量统计](https://github.com/Jouleverse/workspace)
- [如何向 Jouleverse Core 做贡献](https://how.jouleverse.com/#!contribute/how-to-contribute-to-core.md)
- [核心贡献者列表（Core 🆔）](https://github.com/Jouleverse/workspace/blob/main/core-contributors.md)
