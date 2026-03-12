# 《PixelArtNFT使用说明》

1.找一个带有MetaMask的浏览器，然后打开，输入https://pixelart.f7t.cn ，进入像素绘图页面。

<img width="634" height="443" alt="80a097ca-7341-48d2-90d3-b64c3c7e719a" src="https://github.com/user-attachments/assets/81a2c711-8656-47cb-9ef7-57de4e7dc02b" />


打开之后，可以看到两部分，左侧是绘图区，右侧是功能区。

***1-(1).绘图区***

<img width="635" height="685" alt="image" src="https://github.com/user-attachments/assets/af81d184-a452-4e73-a3b6-651dd77d3e9f" />


画布固定为24*24。画布的的最上面有六个按钮，它们的功能分别是：

画笔：在绘图区（画布）绘制图像

橡皮：擦除至白色

填充：把颜色填充到一个区域内

撤销：回到上一步

重做：撤销后回到下一步

清空：清空为白画布

颜色：单击即可进入选择颜色界面

在这些按钮的右侧，有保存图片功能，可以选择：PNG,JPG,BMP,ICO。

<img width="411" height="162" alt="image" src="https://github.com/user-attachments/assets/1250930f-cab9-4dab-9431-f1869f8b23c9" />


在画布的下方，有导入图片转像素图功能，先点击“选择图片”选择，然后点导入即可（也可以直接转base64）。

<img width="635" height="525" alt="image" src="https://github.com/user-attachments/assets/234d9644-9038-46e2-aa8d-9eea3225149f" />


***1-(2)功能区***

<img width="632" height="884" alt="image" src="https://github.com/user-attachments/assets/7a13e346-2ae1-4588-a1c0-e8365724dab6" />

在绘制完画作后，点击“转化Base64”按钮（勿忘！），就可以在下方看见base64编码输出。

<img width="557" height="248" alt="image" src="https://github.com/user-attachments/assets/c60a5731-e10b-4b7f-aa81-f670f81fb904" />

2.转换完成后，点击下方“连接钱包”按钮

<img width="634" height="585" alt="image" src="https://github.com/user-attachments/assets/b3c7817a-f852-4d41-995c-b66fd5456b80" />


如果是地址首次链接，注意点击metamask进行确认

<img width="262" height="131" alt="image" src="https://github.com/user-attachments/assets/3f51019e-5b6c-43a9-be2e-bb6ea9fbb86b" />


点击“连接账户”后，重新点击连接。

转化为base64后，点击“铸造NFT”（MINT），就可以生成一个有专属编号（最小编号）的草稿状态NFT。

<img width="348" height="115" alt="image" src="https://github.com/user-attachments/assets/b95412de-db1e-483a-9add-924df7ff3255" />


如果不满意这个作品，可以点击“销毁”按钮（BURN），然后作品就会被销毁，同时编号被释放。

如果很是满意，可以点击“定稿”按钮（FINALIZED），然后作品会进入“已定稿”状态，这时您便无法进行销毁，同时会传输到admin进行审核。

<img width="255" height="97" alt="image" src="https://github.com/user-attachments/assets/e3caecfa-673d-4785-825c-39cb82b89525" />

--

<img width="500" height="248" alt="image" src="https://github.com/user-attachments/assets/1f665f85-7ab2-435e-bc5d-cfb7093e0aa3" />


3.在审核界面，如果发现了不良违法内容，合约所有者（我）就会进行销毁（BURN），因为所有者此时仍可以销毁。

如果作品正常，就会点击“封印”（SEAL）。然后您的NFT就会进入“已封存”状态。这时任何人（包括所有者）均无法进行销毁，同时会永久占据这个编号。

<img width="233" height="88" alt="image" src="https://github.com/user-attachments/assets/b5e6f3a3-2e27-4c98-914c-629a1fb8655e" />


4.此后，可以在永恒画廊（从绘图界面进入）中，看到您的NFT。

（注：如果显示为“？”是指这个编号的作品正在创作，也就是草稿或定稿状态，未封存）

<img width="634" height="427" alt="image" src="https://github.com/user-attachments/assets/72ff70e6-b156-4ebd-97d2-598be8d3b67a" />


现在来看一下单独的NFT

<img width="475" height="156" alt="image" src="https://github.com/user-attachments/assets/9fc09ad9-0f64-4852-94a6-8dcdf4f4dbec" />


每个NFT均有自己的比编号、边框与EMOJI，这可以反应NFT状态

已经封存：绿框+锁

已定稿：黄框+纸和笔

草稿：灰框+铅笔

已经封存的NFT会显示持有者地址。仅拥有10000个封存NFT。

----
作者：Jn
