package p2p

import (
	"bytes"
	"context"
	"github.com/libp2p/go-libp2p"
	"github.com/libp2p/go-libp2p/core/crypto"
	"github.com/libp2p/go-libp2p/core/host"
	"github.com/libp2p/go-libp2p/core/peer"
	"github.com/multiformats/go-multiaddr"
	"github.com/samirshao/itools/ifile"
	"github.com/samirshao/itools/ihelp"
	"github.com/samirshao/itools/ilog"
	"metor-miner/config"
	"os"
	"time"
)

// NewHost 新建p2p.host
// addr 监听地址
// pem 私钥文件
func NewHost(addr []string) host.Host {
	defer ihelp.ErrCatch()

	var privateKey crypto.PrivKey
	var err error

	pem := config.Api.Home + "id.pem"
	if !ifile.IsExist(pem) {
		privateKey, _, err = createPem(pem)
	} else {
		privateKey, _, err = readPem(pem)
	}
	if err != nil {
		ilog.Logger.Fatalln(err)
		return nil
	}

	node, err := libp2p.New(
		libp2p.Identity(privateKey),
		libp2p.ListenAddrStrings(addr...),
		libp2p.WithDialTimeout(time.Second*10),
	)
	if err != nil {
		ilog.Logger.Fatalln(err)
		return nil
	}

	return node
}

// 连接指定节点
func (_this *P2P) connect(multiAddr string) error {
	mtAddr, err := multiaddr.NewMultiaddr(multiAddr)
	if err != nil {
		ilog.Logger.Error(err)
		return err
	}
	addrInfo, err := peer.AddrInfoFromP2pAddr(mtAddr)
	if err != nil {
		ilog.Logger.Error(err)
		return err
	}
	if err = _this.node.Connect(context.Background(), *addrInfo); err != nil {
		ilog.Logger.Error(err)
		return err
	}
	return nil
}

// 生成一个Ed25519私钥,并写入文件
func createPem(pemPath string) (crypto.PrivKey, crypto.PubKey, error) {
	privateKey, publicKey, err := crypto.GenerateKeyPair(crypto.Ed25519, 0)
	if err != nil {
		ilog.Logger.Error(err)
		return nil, nil, err
	}

	//写文件
	data, err := privateKey.Raw()
	if err != nil {
		ilog.Logger.Error(err)
		return nil, nil, err
	}
	err = os.WriteFile(pemPath, data, 0666)
	if err != nil {
		ilog.Logger.Fatalln(err)
		return nil, nil, err
	}

	return privateKey, publicKey, nil
}

// 从文件读取私钥
func readPem(pemPath string) (crypto.PrivKey, crypto.PubKey, error) {
	pem, err := os.ReadFile(pemPath)
	if err != nil {
		ilog.Logger.Error(err)
		return nil, nil, err
	}
	reader := bytes.NewReader(pem)
	privateKey, publicKey, err := crypto.GenerateEd25519Key(reader)
	if err != nil {
		ilog.Logger.Error(err)
		return nil, nil, err
	}
	return privateKey, publicKey, nil
}
