// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.4
// source: rpc/proto/match.proto

package matchpb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// MatchClient is the client API for Match service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MatchClient interface {
	FindMiner(ctx context.Context, in *Message, opts ...grpc.CallOption) (*FindMinerResp, error)
	UpdMeta(ctx context.Context, in *Message, opts ...grpc.CallOption) (*UpdMetaResp, error)
	FindMultiAddr(ctx context.Context, in *Message, opts ...grpc.CallOption) (*FindMultiAddrResp, error)
}

type matchClient struct {
	cc grpc.ClientConnInterface
}

func NewMatchClient(cc grpc.ClientConnInterface) MatchClient {
	return &matchClient{cc}
}

func (c *matchClient) FindMiner(ctx context.Context, in *Message, opts ...grpc.CallOption) (*FindMinerResp, error) {
	out := new(FindMinerResp)
	err := c.cc.Invoke(ctx, "/matchpb.Match/FindMiner", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *matchClient) UpdMeta(ctx context.Context, in *Message, opts ...grpc.CallOption) (*UpdMetaResp, error) {
	out := new(UpdMetaResp)
	err := c.cc.Invoke(ctx, "/matchpb.Match/UpdMeta", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *matchClient) FindMultiAddr(ctx context.Context, in *Message, opts ...grpc.CallOption) (*FindMultiAddrResp, error) {
	out := new(FindMultiAddrResp)
	err := c.cc.Invoke(ctx, "/matchpb.Match/FindMultiAddr", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MatchServer is the server API for Match service.
// All implementations must embed UnimplementedMatchServer
// for forward compatibility
type MatchServer interface {
	FindMiner(context.Context, *Message) (*FindMinerResp, error)
	UpdMeta(context.Context, *Message) (*UpdMetaResp, error)
	FindMultiAddr(context.Context, *Message) (*FindMultiAddrResp, error)
	mustEmbedUnimplementedMatchServer()
}

// UnimplementedMatchServer must be embedded to have forward compatible implementations.
type UnimplementedMatchServer struct {
}

func (UnimplementedMatchServer) FindMiner(context.Context, *Message) (*FindMinerResp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FindMiner not implemented")
}
func (UnimplementedMatchServer) UpdMeta(context.Context, *Message) (*UpdMetaResp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdMeta not implemented")
}
func (UnimplementedMatchServer) FindMultiAddr(context.Context, *Message) (*FindMultiAddrResp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FindMultiAddr not implemented")
}
func (UnimplementedMatchServer) mustEmbedUnimplementedMatchServer() {}

// UnsafeMatchServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MatchServer will
// result in compilation errors.
type UnsafeMatchServer interface {
	mustEmbedUnimplementedMatchServer()
}

func RegisterMatchServer(s grpc.ServiceRegistrar, srv MatchServer) {
	s.RegisterService(&Match_ServiceDesc, srv)
}

func _Match_FindMiner_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Message)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MatchServer).FindMiner(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/matchpb.Match/FindMiner",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MatchServer).FindMiner(ctx, req.(*Message))
	}
	return interceptor(ctx, in, info, handler)
}

func _Match_UpdMeta_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Message)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MatchServer).UpdMeta(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/matchpb.Match/UpdMeta",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MatchServer).UpdMeta(ctx, req.(*Message))
	}
	return interceptor(ctx, in, info, handler)
}

func _Match_FindMultiAddr_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Message)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MatchServer).FindMultiAddr(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/matchpb.Match/FindMultiAddr",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MatchServer).FindMultiAddr(ctx, req.(*Message))
	}
	return interceptor(ctx, in, info, handler)
}

// Match_ServiceDesc is the grpc.ServiceDesc for Match service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Match_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "matchpb.Match",
	HandlerType: (*MatchServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "FindMiner",
			Handler:    _Match_FindMiner_Handler,
		},
		{
			MethodName: "UpdMeta",
			Handler:    _Match_UpdMeta_Handler,
		},
		{
			MethodName: "FindMultiAddr",
			Handler:    _Match_FindMultiAddr_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "rpc/proto/match.proto",
}
