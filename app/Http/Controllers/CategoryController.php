<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Http\Requests\CreateCategoryRequest;
use App\Http\Requests\EditCategoryRequest;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
 /**
 * Display a listing of the resource.
 *
 * @return \Illuminate\Http\Response
 */
 public function index() {
  return Category::orderByDesc('id')->paginate(3);
 }

 /**
 * Store a newly created resource in storage.
 *
 * @param  \Illuminate\Http\Request  $request
 * @return \Illuminate\Http\Response
 */
 public function store(CreateCategoryRequest $request) {
  $path = $request->file('image')->store('category_images');
  $cat = Category::create([
   'title' => $request->title,
   'image' => $path
  ]);
  return $cat;
 }

 /**
 * Display the specified resource.
 *
 * @param  int  $id
 * @return \Illuminate\Http\Response
 */
 public function show($id) {
  //
 }

 /**
 * Update the specified resource in storage.
 *
 * @param  \Illuminate\Http\Request  $request
 * @param  int  $id
 * @return \Illuminate\Http\Response
 */
 public function update(EditCategoryRequest $request,Category $category) {
  $oldPath = $category->image;
  $path = $request->file('image')->store('category_images');
  if($request->hasFile('image')){
  Storage::delete($oldPath);
  $cat = $category->update([
   'title' => $request->title,
   'image' => $path
  ]);
  return $cat;
  }
 }

 /**
 * Remove the specified resource from storage.
 *
 * @param  int  $id
 * @return \Illuminate\Http\Response
 */
 public function destroy(Category $category) {
  Storage::delete($category->image);
  return  $category->delete();
 }
}